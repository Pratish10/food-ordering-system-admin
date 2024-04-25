import DataTable from '@/components/DataTables/DataTable'
import { MenuColumn } from '@/components/Menu/MenuColumn'
import { CategoryForm } from '@/components/CategoryForm'
import React from 'react'
import { getMenus } from '@/actions/menu/get-Menus'
import { deleteMenuMany } from '@/actions/menu/delete-menu'

const MenuList = async (): Promise<React.JSX.Element> => {
  const menus = await getMenus()
  return (
    <React.Fragment>
      <h1 className="text-2xl font-bold">Menus</h1>
      <p className='text-gray-500'>Manage your menus</p>
      <DataTable
        columns={MenuColumn}
        data={menus}
        buttonLabel='Add Category'
        modalContent={<CategoryForm />}
        deleteFunction={deleteMenuMany}
      />
    </React.Fragment>
  )
}

export default MenuList
