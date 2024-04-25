'use client'
import { type ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { DialogBox } from '@/components/DialogBox'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import React, { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { type Table } from '@prisma/client'
import { toast } from 'sonner'
import { Badge } from '@/components/ui/badge'
import { deleteTable } from '@/actions/Tables/delete-table'
import Link from 'next/link'
import { DataTableColumnHeader } from '../DataTables/data-table-column-header'

export const TableColumn: Array<ColumnDef<Table>> = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => {
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          table.toggleAllPageRowsSelected(!!value)
        }}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          row.toggleSelected(!!value)
        }}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'tableNumber',
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Table Number" />
      )
    },
    cell: ({ row }) => {
      const TableNumber = row.original.tableNumber

      return (
        <div className='hover:underline cursor-pointer'>
          <Link href={`editTable/${row.original.id}`}>{TableNumber}</Link>
        </div>
      )
    }
  },
  {
    accessorKey: 'tableStatus',
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Table Status" />
      )
    },
    cell: ({ row }) => {
      const tableStatus = row.original.tableStatus
      return (
        <Badge
          variant="outline"
          className={`rounded-full text-xs ${
            tableStatus === 'Vacant' ? 'bg-green-400' : 'bg-red-400'
          }`}
        >
          {tableStatus}
        </Badge>
      )
    }
  },
  {
    accessorKey: 'tableSize',
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Table Size" />
      )
    },
    cell: ({ row }) => {
      const size = row.original.tableSize
      return <p className='sm:text-xs md:text-sm'>{size} Person</p>
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const table = row.original
      const [showDialog, setShowDialog] = useState(false)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [isPending, startTransition] = useTransition()
      const router = useRouter()

      const editHandler = (): void => {
        router.push(`editTable/${table.id}`)
      }

      const deleteHandler = (): void => {
        setShowDialog(true)
      }

      const closeDialog = (): void => {
        setShowDialog(false)
      }

      const onDelete = (): void => {
        startTransition(() => {
          void deleteTable(table.id)
            .then((data) => {
              if (data?.success != null) {
                toast.success(data?.success)
                closeDialog()
              }
              if (data?.error != null) {
                toast.error(data?.error)
              }
            }).catch(() => toast.error('Something Went Wrong!'))
        })
      }

      return (
        <React.Fragment>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={editHandler}>Edit</DropdownMenuItem>
              <DropdownMenuItem onClick={deleteHandler}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DialogBox
            header="Delete Menu"
            content={
              <React.Fragment>
                Are you sure you want to delete Table Number{' '}
                <span className="text-orange-400">{table.tableNumber}</span> ?
              </React.Fragment>
            }
            show={showDialog}
            onClose={closeDialog}
            onAction={onDelete}
            onActionButtonLabel='Delete'
          />
        </React.Fragment>
      )
    }
  }
]
