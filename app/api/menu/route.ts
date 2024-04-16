import { NextResponse } from 'next/server'

import { db } from '@/lib/db'
import { AddMenuSchema } from '@/schemas'
import { getMenuByName } from '@/Data/menu'
import { currentProfile } from '@/lib/current-user'

export async function POST (
  req: Request
): Promise<NextResponse<Promise<boolean>> | undefined> {
  try {
    const values = await req.json()

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

    const existingMenu = await getMenuByName(name)

    if (existingMenu != null) {
      return new NextResponse('Dish Already Exists!', { status: 403 })
    }

    await db.menu.create({
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

    return new NextResponse(true, { status: 200 })
  } catch (error) {
    console.error('ADD_MENU ERROR:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function GET (): Promise<NextResponse> {
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

    const response = {
      totalRecords: menus.length,
      data: menus
    }

    return new NextResponse(JSON.stringify(response), { status: 200 })
  } catch (error) {
    console.error('GET_ALL_MENUS_ERROR:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
