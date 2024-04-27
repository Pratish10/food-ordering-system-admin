import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

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

    return new NextResponse(JSON.stringify(menu), { status: 200 })
  } catch (error) {
    console.error('GET_MENU ERROR:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
