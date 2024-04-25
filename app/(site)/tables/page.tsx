import DataTable from '@/components/DataTables/DataTable'
import { TableColumn } from '@/components/DataTables/TableColumn'
import React from 'react'
import { getTables } from '@/actions/Tables/get-Tables'
import { TableForm } from '@/components/TableForm'
import { deleteTableMany } from '@/actions/Tables/delete-table'

const TableList = async (): Promise<React.JSX.Element> => {
  const tables = await getTables()
  return (
    <React.Fragment>
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
        deleteFunction={deleteTableMany}
      />
    </React.Fragment>
  )
}

export default TableList
