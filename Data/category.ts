import { db } from '@/lib/db'
import { type Category } from '@prisma/client'

export const getCategoryByCategory = async (
  category: string
): Promise<Category | null> => {
  try {
    const categoryData = await db.category.findUnique({
      where: { category }
    })

    return categoryData
  } catch {
    return null
  }
}
