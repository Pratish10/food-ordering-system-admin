'use client'
import { type ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { DialogBox } from '@/components/DialogBox'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { type Table } from '@prisma/client'
import { toast } from 'sonner'
import { Badge } from '@/components/ui/badge'
import { deleteTable } from '@/actions/Tables/delete-table'

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
        className="hidden md:block"
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
        className="hidden md:block"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'id',
    header: ({ column }) => {
      return (
        <p
          className="flex cursor-pointer text-orange-500 hover:underline md:text-sm text-xs"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === 'asc')
          }}
        >
          Id
          <ArrowUpDown className="ml-2 h-5 w-3" />
        </p>
      )
    }
  },
  {
    accessorKey: 'tableNumber',
    header: ({ column }) => {
      return (
        <p
          className="flex cursor-pointer text-orange-500 hover:underline md:text-sm text-xs"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === 'asc')
          }}
        >
          Table Number
          <ArrowUpDown className="ml-2 h-5 w-3" />
        </p>
      )
    }
  },
  {
    accessorKey: 'tableStatus',
    header: ({ column }) => {
      return (
        <p
          className="flex cursor-pointer text-orange-500 hover:underline md:text-sm text-xs"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === 'asc')
          }}
        >
          Status
          <ArrowUpDown className="ml-2 h-5 w-3" />
        </p>
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
        <p
          className="hidden lg:flex cursor-pointer text-orange-500 hover:underline md:text-sm text-xs"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === 'asc')
          }}
        >
          Size
          <ArrowUpDown className="ml-2 h-5 w-3" />
        </p>
      )
    },
    cell: ({ row }) => {
      const size = row.original.tableSize
      return <p>{size} Person</p>
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
        <>
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
              <>
                Are you sure you want to delete{' '}
                <span className="text-orange-400">{table.tableNumber}</span> ?
              </>
            }
            show={showDialog}
            onClose={closeDialog}
            onDelete={onDelete}
          />
        </>
      )
    }
  }
]
