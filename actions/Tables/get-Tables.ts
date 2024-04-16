'use server'
import { type Table } from '@prisma/client'
import { db } from '@/lib/db'

export const getTables = async (): Promise<Table[]> => {
  try {
    const tables = await db.table.findMany({
      orderBy: {
        updatedAt: 'desc'
      }
    })

    return tables
  } catch {
    return []
  }
}
