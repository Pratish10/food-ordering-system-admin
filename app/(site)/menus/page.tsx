import DataTable from '@/components/Tables/DataTable'
import { MenuColumn } from '@/components/Tables/MenuColumn'
import { CategoryForm } from '@/components/CategoryForm'
import React from 'react'
import { getMenus } from '@/actions/menu/get-Menus'

const MenuList = async (): Promise<React.JSX.Element> => {
  const menus = await getMenus()

  return (
    <div>
      <h1 className="text-2xl">Menus</h1>ssss
      <DataTable
        columns={MenuColumn}
        data={menus}
        columnControl
        globalSearch
        showPagination
        showModalButton
        buttonLabel='Add Category'
        modalContent={<CategoryForm />}
      />
    </div>
  )
}

export default MenuList
