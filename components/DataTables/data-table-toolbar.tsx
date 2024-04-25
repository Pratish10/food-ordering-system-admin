'use client'

import { type Table } from '@tanstack/react-table'

import { loadCategories, tableStatus } from './data'
import { DataTableFacetedFilter } from './data-table-faceted-filter'
import { useEffect, useState } from 'react'
import { DataTableViewOptions } from './data-table-view-options'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  buttonLabel?: string
}

export function DataTableToolbar<TData> ({
  table
}: DataTableToolbarProps<TData>): JSX.Element {
  const [categories, setCategories] = useState<
  Array<{ value: string, label: string }>
  >([])

  useEffect(() => {
    const fetchCategories = async (): Promise<void> => {
      const fetchedCategories = await loadCategories()
      setCategories(fetchedCategories)
    }

    void fetchCategories()
  }, [])

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {/* debouce input here */}
        {table.getColumn('category') != null && (
          <div className="flex">
            <DataTableFacetedFilter
              column={table.getColumn('category')}
              title="Category"
              options={categories}
            />
          </div>
        )}
        {table.getColumn('tableStatus') != null && (
          <div className="flex">
            <DataTableFacetedFilter
              column={table.getColumn('tableStatus')}
              title="Status"
              options={tableStatus}
            />
          </div>
        )}
        <DataTableViewOptions table={table} />
      </div>
    </div>
  )
}
