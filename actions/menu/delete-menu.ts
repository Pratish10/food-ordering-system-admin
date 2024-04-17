'use server'
import { getMenuById } from '@/Data/menu'
import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export const deleteMenu = async (
  menuId: string
): Promise<{
  error?: string | undefined
  success?: string | undefined
}> => {
  const menuToDelete = await getMenuById(menuId)

  if (menuToDelete === null) {
    return { error: 'Dish not found!' }
  }

  try {
    await db.menu.delete({
      where: { id: menuId }
    })

    revalidatePath('/menus')

    return { success: 'Deleted Successfully!' }
  } catch (error) {
    console.error('Error deleting Menu:', error)
    return { error: 'Internal Server Error' }
  }
}

export const deleteMenuMany = async (menusToDelete: string[]): Promise<{
  error?: string | undefined
  success?: string | undefined
}> => {
  try {
    await db.menu.deleteMany({
      where: {
        id: {
          in: menusToDelete
        }
      }
    })

    revalidatePath('/menus')
    return { success: 'Deleted Successfully!' }
  } catch (error) {
    console.error('Error deleting Menu:', error)
    return { error: 'Internal Server Error' }
  }
}
