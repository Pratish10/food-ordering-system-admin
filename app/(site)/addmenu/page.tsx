import { getCategory } from '@/actions/categories/get-category'
import { MenuForm } from '@/components/Menu/MenuForm'
import React from 'react'

const AddMenu = async (): Promise<JSX.Element> => {
  const categories = await getCategory()
  return <MenuForm type='Add' categories={categories} />
}

export default AddMenu
