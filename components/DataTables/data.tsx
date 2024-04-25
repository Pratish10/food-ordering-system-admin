import { getCategory } from '@/actions/categories/get-category'
import { TableStatus } from '@prisma/client'

export const loadCategories = async (): Promise<Array<{
  value: string
  label: string
}>> => {
  const categories = await getCategory()

  const modifiedCategory = categories.map((item) => ({
    label: item.category,
    value: item.category
  }))

  return modifiedCategory
}

export const tableStatus = [
  {
    value: TableStatus.Vacant,
    label: 'Vacant'
  },
  {
    value: TableStatus.Occupied,
    label: 'Occupied'
  }
]
