import { type NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET (req: NextRequest): Promise<NextResponse> {
  try {
    const searchParams = req.nextUrl.searchParams
    const category = searchParams.get('category')

    let menus

    if (category != null) {
      menus = await db.menu.findMany({
        where: {
          category: String(category)
        },
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
      if (menus.length === 0) {
        throw new Error('Invalid Category passed')
      }
    } else {
      menus = await db.menu.findMany({
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
    }

    const response = {
      totalRecords: menus.length,
      responseData: menus
    }

    const headers = {
      'Cache-Control': 'no-store'
    }

    return new NextResponse(JSON.stringify(response), { status: 200, headers })
  } catch (error) {
    console.error('GET_MENUS_ERROR:', error)
    return new NextResponse(error as string, { status: 500 })
  }
}
