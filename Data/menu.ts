import { db } from '@/lib/db'
import { type Menu } from '@prisma/client'

export const getMenuByName = async (name: string): Promise<Menu | null> => {
  try {
    const menu = await db.menu.findUnique({
      where: { name }
    })
    return menu
  } catch {
    return null
  }
}
export const getMenuById = async (menuId: string): Promise<Menu | null> => {
  try {
    const menu = await db.menu.findUnique({
      where: { id: menuId }
    })
    return menu
  } catch {
    return null
  }
}
