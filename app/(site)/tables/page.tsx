import DataTable from '@/components/DataTables/DataTable'
import { TableColumn } from '@/components/Table/TableColumn'
import React from 'react'
import { getTables } from '@/actions/Tables/get-Tables'
import { TableForm } from '@/components/TableForm'
import { deleteTableMany } from '@/actions/Tables/delete-table'

const TableList = async (): Promise<React.JSX.Element> => {
  const tables = await getTables()
  return (
    <React.Fragment>
      <h1 className="text-2xl font-bold">Tables</h1>
      <p className='text-gray-500'>Manage your tables</p>
      <DataTable
        columns={TableColumn}
        data={tables}
        buttonLabel='Add Table'
        modalContent={<TableForm />}
        deleteFunction={deleteTableMany}
      />
    </React.Fragment>
  )
}

export default TableList
