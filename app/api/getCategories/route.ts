import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET (): Promise<NextResponse<unknown>> {
  try {
    const categories = await db.category.findMany({
      orderBy: {
        updatedAt: 'desc'
      }
    })

    const response = {
      totalRecords: categories.length,
      responseData: categories
    }
    const headers = {
      'Cache-Control': 'no-store'
    }

    return new NextResponse(JSON.stringify(response), { status: 200, headers })
  } catch (error) {
    console.error('GET_CATEGORIES_ERROR:', error)
    return new NextResponse(error as string, { status: 500 })
  }
}
