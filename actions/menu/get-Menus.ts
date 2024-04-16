'use server'
import { db } from '@/lib/db'
import { type $Enums } from '@prisma/client'
import { revalidatePath } from 'next/cache'

export const getMenus = async (): Promise<
Array<{
  id: string
  name: string
  description: string
  type: $Enums.MenuType
  image: string
  category: string
  amount: string
  createdAt: Date
  updatedAt: Date
  isFeatured: boolean | null
}>
> => {
  try {
    const menus = await db.menu.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        type: true,
        image: true,
        category: true,
        amount: true,
        createdAt: true,
        updatedAt: true,
        isFeatured: true
      },
      orderBy: {
        updatedAt: 'desc'
      }
    })

    revalidatePath('/menus')

    return menus
  } catch {
    return []
  }
}
