'use server'
import { AddCategorySchema } from '@/schemas'
import { getCategoryByCategory } from '@/Data/category'
import { db } from '@/lib/db'
import { type z } from 'zod'

export const addCategory = async (
  value: z.infer<typeof AddCategorySchema>
): Promise<{
  error?: string | undefined
  success?: string | undefined
}> => {
  const validatedFields = AddCategorySchema.safeParse(value)

  if (!validatedFields.success) {
    return { error: 'Invalid Fields!' }
  }

  const { category, userId } = validatedFields.data

  const existingCategory = await getCategoryByCategory(category)

  if (existingCategory !== null) {
    return { error: 'Category Already Exists' }
  }

  try {
    await db.category.create({
      data: {
        category,
        userId
      }
    })

    return { success: 'Successfully Created Category!' }
  } catch (error) {
    console.error('Error creating category:', error)
    return { error: 'Internal Server Error' }
  }
}
