import DataTable from '@/components/Tables/DataTable'
import { TableColumn } from '@/components/Tables/TableColumn'
import React from 'react'
import { getTables } from '@/actions/Tables/get-Tables'
import { TableForm } from '@/components/TableForm'

const TableList = async (): Promise<React.JSX.Element> => {
  const tables = await getTables()
  return (
    <div>
      <h1 className="text-2xl">Tables</h1>
      <DataTable
        columns={TableColumn}
        data={tables}
        columnControl
        globalSearch
        showPagination
        showModalButton
        buttonLabel='Add Table'
        modalContent={<TableForm />}
      />
    </div>
  )
}

export default TableList
