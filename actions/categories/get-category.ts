'use server'
import { db } from '@/lib/db'
import { type Category } from '@prisma/client'

export const getCategory = async (): Promise<Category[]> => {
  try {
    const categories = await db.category.findMany({
      orderBy: {
        updatedAt: 'desc'
      }
    })

    return categories
  } catch {
    return []
  }
}
