'use server'
import { getTableById } from '@/Data/table'
import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export const deleteTable = async (
  tableId: string
): Promise<{
  error?: string | undefined
  success?: string | undefined
}> => {
  const tableToDelete = await getTableById(tableId)

  if (tableToDelete === null) {
    return { error: 'Table not found!' }
  }

  try {
    await db.table.delete({
      where: { id: tableId }
    })

    revalidatePath('/tables')

    return { success: 'Deleted Successfully!' }
  } catch (error) {
    console.error('Error Deleting Table:', error)
    return { error: 'Internal Server Error' }
  }
}
