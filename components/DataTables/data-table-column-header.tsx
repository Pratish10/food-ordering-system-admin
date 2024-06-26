import {
  MoveDown,
  MoveUp,
  ChevronsUpDown,
  EyeOff
} from 'lucide-react'
import { type Column } from '@tanstack/react-table'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}

export function DataTableColumnHeader<TData, TValue> ({
  column,
  title,
  className
}: DataTableColumnHeaderProps<TData, TValue>): JSX.Element {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="sm"
            className="data-[state=open]:bg-accent bg-orange-100 hover:bg-orange-200 text-orange-400"
          >
            <span>{title}</span>
            {column.getIsSorted() === 'desc'
              ? (
              <MoveDown className="ml-2 h-4 w-4" />
                )
              : column.getIsSorted() === 'asc'
                ? (
              <MoveUp className="ml-2 h-4 w-4" />
                  )
                : (
              <ChevronsUpDown className="ml-2 h-4 w-4" />
                  )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => { column.toggleSorting(false) }}>
            <MoveUp className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => { column.toggleSorting(true) }}>
            <MoveDown className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => { column.toggleVisibility(false) }}>
            <EyeOff className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
