import { getMenuById } from '@/Data/menu'
import { currentProfile } from '@/lib/current-user'
import { db } from '@/lib/db'
import { AddMenuSchema } from '@/schemas'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function PUT (
  req: Request
): Promise<NextResponse<Promise<boolean>> | undefined> {
  try {
    const { id, ...values } = await req.json()

    const user = await currentProfile()

    const validatedFields = AddMenuSchema.safeParse(values)

    if (user == null) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    if (!validatedFields.success) {
      return new NextResponse('Invalid Fields!', { status: 403 })
    }

    const {
      name,
      amount,
      category,
      description,
      type,
      image,
      isFeatured
    } = validatedFields.data

    const existingMenu = await getMenuById(id as string)

    if (existingMenu == null) {
      return new NextResponse('Dish not found!', { status: 404 })
    }

    if (existingMenu.userId !== user.id) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    await db.menu.update({
      where: {
        id
      },
      data: {
        name,
        amount,
        category,
        description,
        image,
        isFeatured,
        type,
        userId: user.id
      }
    })

    revalidatePath('/menus')

    return new NextResponse(true, { status: 200 })
  } catch (error) {
    console.error('UPDATE_MENU ERROR:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
export async function DELETE (
  req: Request
): Promise<NextResponse<Promise<boolean>> | undefined> {
  try {
    const urlParts = req.url.split('/')
    const id = urlParts[urlParts.length - 1]

    const user = await currentProfile()

    if (user == null) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const menuToDelete = await getMenuById(id)

    if (menuToDelete === null) {
      return new NextResponse('Dish not found!', { status: 404 })
    }

    if (menuToDelete.userId !== user.id) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    await db.menu.delete({
      where: {
        id
      }
    })

    revalidatePath('/menus')

    return new NextResponse(true, { status: 200 })
  } catch (error) {
    console.error('DELETE_MENU ERROR:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
