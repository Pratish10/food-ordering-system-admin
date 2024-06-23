import { getTableByTableNumber } from '@/Data/table'
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
    const { tableNumber } = body

    const existingTable = await getTableByTableNumber(tableNumber as string)

    const headers = {
      'Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': '*'
    }

    if (existingTable != null) {
      return new NextResponse(JSON.stringify(true), { status: 200, headers })
    } else {
      console.error(`Table ${tableNumber} does not exist`)
      return new NextResponse('Table not found', { status: 404, headers })
    }
  } catch (error) {
    console.error('VERIFY_TABLE_NUMBER:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function OPTIONS (req: NextRequest): Promise<NextResponse<unknown>> {
  return handleOptions(req)
}
