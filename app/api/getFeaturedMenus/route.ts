import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET (): Promise<NextResponse> {
  try {
    const featuredMenus = await db.menu.findMany({
      where: { isFeatured: true },
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
      totalRecords: featuredMenus.length,
      responseData: featuredMenus
    }

    const headers = {
      'Cache-Control': 'no-store'
    }

    return new NextResponse(JSON.stringify(response), { status: 200, headers })
  } catch (error) {
    console.error('GET_MENUS_ERROR:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
