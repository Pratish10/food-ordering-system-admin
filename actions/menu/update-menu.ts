'use server'

import { db } from '@/lib/db'
import { AddMenuSchema } from '@/schemas'
import { revalidatePath } from 'next/cache'
import { type z } from 'zod'

export const updateMenu = async (
  values: z.infer<typeof AddMenuSchema>,
  menuId: string
): Promise<{
  error?: string | undefined
  success?: string | undefined
}> => {
  const validatedFields = AddMenuSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid Fields!' }
  }

  try {
    await db.menu.update({
      where: { id: menuId },
      data: {
        ...values
      }
    })

    revalidatePath('/menus')

    return { success: 'Menu Updated Successfully!' }
  } catch (error) {
    console.error('Error Updating Menu:', error)
    return { error: 'Internal Server Error' }
  }
}
