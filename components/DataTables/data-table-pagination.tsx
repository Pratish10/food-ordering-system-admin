import { type Table } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'

interface DataTablePaginationProps<TData> {
  table: Table<TData>
}

export function DataTablePagination<TData> ({
  table
}: DataTablePaginationProps<TData>): JSX.Element {
  return (
    <div className="flex items-center justify-between px-2 py-3">
      {table.getRowModel().rows.some((row) => row.getIsSelected()) && (
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected
        </div>
      )}

      <div className="flex items-center ml-auto space-x-6">
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
    </div>
  )
}
