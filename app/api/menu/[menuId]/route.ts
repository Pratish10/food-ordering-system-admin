import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET (
  req: Request
): Promise<NextResponse<Promise<boolean>> | undefined> {
  try {
    const urlParts = req.url.split('/')
    const id = urlParts[urlParts.length - 1]

    const menu = await db.menu.findUnique({
      where: {
        id
      }
    })

    const headers = {
      'Cache-Control': 'no-store'
    }

    return new NextResponse(JSON.stringify(menu), { status: 200, headers })
  } catch (error) {
    console.error('GET_MENU ERROR:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
