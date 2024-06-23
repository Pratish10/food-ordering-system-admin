'use server'

import { getMenuByName } from '@/Data/menu'
import { db } from '@/lib/db'
import { AddMenuSchema } from '@/schemas'
import { revalidatePath } from 'next/cache'
import { type z } from 'zod'

export const addMenu = async (
  values: z.infer<typeof AddMenuSchema>
): Promise<{
  error?: string | undefined
  success?: string | undefined
}> => {
  const validatedFields = AddMenuSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid Fields!' }
  }

  const {
    name,
    amount,
    category,
    description,
    type,
    image,
    isFeatured,
    userId,
    availability
  } = validatedFields.data

  const existingMenu = await getMenuByName(name)

  if (existingMenu != null) {
    return { error: 'Dish Already Exists' }
  }

  try {
    await db.menu.create({
      data: {
        name,
        amount,
        category,
        description,
        image,
        isFeatured,
        type,
        userId,
        availability
      }
    })

    revalidatePath('/menus')

    return { success: 'Successfully Created Menu!' }
  } catch (error) {
    console.error('Error creating Menu:', error)
    return { error: 'Internal Server Error' }
  }
}
