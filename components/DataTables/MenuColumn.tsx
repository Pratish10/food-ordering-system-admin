'use client'
import { type ColumnDef } from '@tanstack/react-table'
import { Carrot, Drumstick, ArrowUpDown, MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { DialogBox } from '@/components/DialogBox'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import React, { useState, useTransition } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useRouter } from 'next/navigation'
import { type Menu } from '@prisma/client'
import { deleteMenu } from '@/actions/menu/delete-menu'
import { toast } from 'sonner'
import Link from 'next/link'

export const MenuColumn: Array<ColumnDef<Menu>> = [
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
    id: 'image',
    cell: ({ row }) => {
      const image = row.original.image
      const Name = row.original.name
      const initials = Name.split(' ')
        .map((word) => word.charAt(0).toUpperCase())
        .join('')

      return (
        <Avatar>
          <AvatarImage src={image} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      )
    }
  },
  {
    accessorKey: 'Name',
    header: ({ column }) => {
      return (
        <p
          className="flex cursor-pointer text-orange-500 hover:underline md:text-sm text-xs"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === 'asc')
          }}
        >
          Name
          <ArrowUpDown className="ml-2 h-5 w-3" />
        </p>
      )
    },
    cell: ({ row }) => {
      const type = row.original.type
      const Name = row.original.name

      return (
        <div className="flex items-center space-x-1">
          <div className='hover:underline cursor-pointer'>
            <Link href={`editmenu/${row.original.id}`}>{Name}</Link>
          </div>
          <span>
            {type === 'nonVegeterian'
              ? (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Drumstick color="red" size={15} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Non Vegeterian</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
                )
              : (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Carrot color="green" size={15} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Vegeterian</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
                )}
          </span>
        </div>
      )
    }
  },
  {
    accessorKey: 'category',
    header: ({ column }) => {
      return (
        <p
          className="flex cursor-pointer text-orange-500 hover:underline md:text-sm text-xs"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === 'asc')
          }}
        >
          Category
          <ArrowUpDown className="ml-2 h-5 w-3" />
        </p>
      )
    }
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => {
      return (
        <p
          className="flex cursor-pointer text-orange-500 hover:underline md:text-sm text-xs"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === 'asc')
          }}
        >
          Amount
          <ArrowUpDown className="ml-2 h-5 w-3" />
        </p>
      )
    },
    cell: ({ row }) => {
      const Amount = parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR'
      }).format(Amount)

      return <div>{formatted}</div>
    }
  },
  {
    accessorKey: 'Last Modified',
    header: ({ column }) => {
      return (
        <p
          className="hidden lg:flex cursor-pointer text-orange-500 hover:underline md:text-sm text-xs"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === 'asc')
          }}
        >
          Last Modified
          <ArrowUpDown className="ml-2 h-5 w-3" />
        </p>
      )
    },
    cell: ({ row }) => {
      const updatedAt: Date | undefined = row.original.updatedAt
      const formattedDate =
        updatedAt !== undefined
          ? new Intl.DateTimeFormat('en-US', {
            timeZone: 'Asia/Kolkata',
            hour12: true,
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
          }).format(new Date(updatedAt))
          : ''

      return <div className="hidden md:block">{formattedDate}</div>
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const menu = row.original
      const [showDialog, setShowDialog] = useState(false)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [isPending, startTransition] = useTransition()
      const router = useRouter()

      const editHandler = (): void => {
        router.push(`editmenu/${menu.id}`)
      }

      const deleteHandler = (): void => {
        setShowDialog(true)
      }

      const closeDialog = (): void => {
        setShowDialog(false)
      }

      const onDelete = (): void => {
        startTransition(async () => {
          void deleteMenu(menu?.id).then((data) => {
            if (data?.success != null) {
              toast.success(data?.success)
              close()
            }
            if (data?.error != null) {
              toast.error(data?.error)
            }
          })
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
                Are you sure you want to delete{' '}
                <span className="text-orange-400">{menu.name}</span> ?
              </React.Fragment>
            }
            show={showDialog}
            onClose={closeDialog}
            onAction={onDelete}
            onActionButtonLabel="Delete"
          />
        </React.Fragment>
      )
    }
  }
]
