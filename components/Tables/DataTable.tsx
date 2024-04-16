'use client'
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useEffect, useState } from 'react'
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
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { XCircle } from 'lucide-react'

interface DataTableProps<TData, TValue, TModalContent extends JSX.Element> {
  columns: Array<ColumnDef<TData, TValue>>
  data: TData[]
  loading?: boolean
  globalSearch?: boolean
  columnControl?: boolean
  showPagination?: boolean
  showModalButton?: boolean
  buttonLabel?: string
  modalContent?: TModalContent
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
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
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
        placeholder="Search all columns..."
        className="max-w-sm pr-10"
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
  loading,
  globalSearch,
  columnControl,
  showPagination,
  showModalButton,
  buttonLabel,
  modalContent
}: DataTableProps<TData, TValue, TModalContent>): JSX.Element {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [globalFilter, setGlobalFilter] = useState('')

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

  return (
    <>
      <div className="rounded-md">
        <Table />
      </div>
      <div className="flex items-center py-4">
        {globalSearch && (
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={(value) => {
              setGlobalFilter(String(value))
            }}
            className="p-2 font-lg shadow border border-block"
          />
        )}
        {columnControl && (
          <div className=" flex ml-auto space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value: any) => {
                          column.toggleVisibility(!!value)
                        }}
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    )
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
            {showModalButton && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="orange">{buttonLabel}</Button>
                </DialogTrigger>
                <DialogContent className="w-full">
                  {modalContent}
                </DialogContent>
              </Dialog>
            )}
          </div>
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
        {showPagination && (
          <div className="hidden lg:flex p-4 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{' '}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
        )}
        {showPagination && (
          <div className="flex items-center justify-end space-x-2 p-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                table.previousPage()
              }}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                table.nextPage()
              }}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </>
  )
}

export default DataTable
