import { db } from '@/lib/db'
import { type Table } from '@prisma/client'

export const getTableById = async (tableId: string): Promise<Table | null> => {
  try {
    const table = await db.table.findUnique({
      where: { id: tableId }
    })

    return table
  } catch {
    return null
  }
}
export const getTableByTableNumber = async (
  tableNumber: string
): Promise<Table | null> => {
  try {
    const table = await db.table.findUnique({
      where: { tableNumber }
    })

    return table
  } catch {
    return null
  }
}
