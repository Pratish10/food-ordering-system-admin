import { db } from '@/lib/db'
import { type NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

function handleOptions (req: NextRequest): NextResponse<unknown> {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  }

  return new NextResponse(null, { headers })
}

export async function POST (req: NextRequest): Promise<NextResponse> {
  try {
    if (req.method === 'OPTIONS') {
      return handleOptions(req)
    }

    const body = await req.json()
    const { orderId, tableNumber, items, orderNumber } = body

    const headers = {
      'Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': '*'
    }

    const orders = await db.order.create({
      data: {
        id: orderId,
        tableNumber,
        orderNumber,
        items: {
          create: items.map((item: { id: string, quantity: number }) => ({
            menuItem: {
              connect: { id: item.id }
            },
            quantity: item.quantity
          }))
        }
      },
      include: {
        items: true
      }
    })

    return new NextResponse(JSON.stringify(orders), { status: 200, headers })
  } catch (error) {
    console.error('SET_ORDERS_ERROR:', error)
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
  }
}

export async function OPTIONS (req: NextRequest): Promise<NextResponse<unknown>> {
  return handleOptions(req)
}
