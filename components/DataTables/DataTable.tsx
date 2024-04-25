/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'
import React, { useEffect, useState } from 'react'
import {
  type ColumnDef,
  type SortingState,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getPaginationRowModel,
  type ColumnFiltersState,
  getFilteredRowModel,
  type VisibilityState
} from '@tanstack/react-table'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Trash2, XCircle } from 'lucide-react'
import { DialogBox } from '../DialogBox'
import { useDeleteMany } from '@/hooks/useDeleteMany'
import { DataTablePagination } from './data-table-pagination'
import { DataTableToolbar } from './data-table-toolbar'

interface DataTableProps<TData, TValue, TModalContent extends JSX.Element> {
  columns: Array<ColumnDef<TData, TValue>>
  data: TData[]
  buttonLabel?: string
  modalContent?: TModalContent
  deleteFunction?: (
    dataToDelete: string[]
  ) => Promise<{ error?: string, success?: string }>
}

function DebouncedInput ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<
React.InputHTMLAttributes<HTMLInputElement>,
'onChange'
>): JSX.Element {
  const [value, setValue] = useState(String(initialValue))

  useEffect(() => {
    setValue(String(initialValue))
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => {
      clearTimeout(timeout)
    }
  }, [value, debounce, onChange])

  const handleClear = (): void => {
    setValue('')
    onChange('')
  }

  return (
    <div className="relative">
      <Input
        {...props}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        placeholder="Search..."
        className="h-8 w-[140px] lg:w-[230px]"
      />
      {!!value && (
        <div className="absolute inset-y-0 right-0 pl-3 flex items-center mx-2 cursor-pointer">
          <XCircle onClick={handleClear} size={15} />
        </div>
      )}
    </div>
  )
}

function DataTable<TData, TValue, TModalContent extends JSX.Element> ({
  columns,
  data,
  buttonLabel,
  modalContent,
  deleteFunction
}: DataTableProps<TData, TValue, TModalContent>): JSX.Element {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [globalFilter, setGlobalFilter] = useState('')
  const [showDialog, setShowDialog] = useState(false)
  const [selectedData, setSelectedData] = useState([])
  const [handleDelete] = useDeleteMany(selectedData, deleteFunction)

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter
    }
  })

  const getSelectedData = (): any => {
    return table
      .getRowModel()
      .rows.filter((row) => row.getIsSelected())
      .map((row) => row.original)
  }

  const deleteHandler = (): void => {
    setShowDialog(true)
  }

  const closeDialog = (): void => {
    setShowDialog(false)
  }

  const onDeleteHandler = async (): Promise<void> => {
    await handleDelete()
    table.setRowSelection({})
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setSelectedData(getSelectedData().map((item: { id: any }) => item.id))
  }, [getSelectedData().length])

  return (
    <React.Fragment>
      <div className="rounded-md">
        <Table />
      </div>
      <div className="flex items-center py-4">
        <DebouncedInput
          value={globalFilter ?? ''}
          onChange={(value) => {
            setGlobalFilter(String(value))
          }}
        />
        <DataTableToolbar table={table} />
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="orange" size="sm" className="ml-auto h-8 flex">
              <Plus className="md:hidden flex" size={15} />
              {window.innerWidth > 768 && buttonLabel && (
                <span>{buttonLabel}</span>
              )}
            </Button>
          </DialogTrigger>
          <DialogContent className="w-full">{modalContent}</DialogContent>
        </Dialog>
        {table.getRowModel().rows.some((row) => row.getIsSelected()) && (
          <React.Fragment>
            <Button
              variant="destructive"
              size="icon"
              className="h-8"
              onClick={deleteHandler}
            >
              <Trash2 size={20} />
            </Button>
            <DialogBox
              header="Delete"
              content={
                <React.Fragment>
                  Are you sure you want to delete {getSelectedData().length}{' '}
                  records ?
                </React.Fragment>
              }
              show={showDialog}
              onClose={closeDialog}
              onAction={onDeleteHandler}
              onActionButtonLabel="Delete"
            />
          </React.Fragment>
        )}
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="bg-orange-100">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length !== 0
              ? (
                  table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() ? 'selected' : ''}
                  className="md:text-sm text-xs"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
                  ))
                )
              : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No records found
                </TableCell>
              </TableRow>
                )}
          </TableBody>
        </Table>
        <DataTablePagination table={table} />
      </div>
    </React.Fragment>
  )
}

export default DataTable
