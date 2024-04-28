'use server'
import { getTableByTableNumber } from '@/Data/table'
import { db } from '@/lib/db'
import { AddTableSchema } from '@/schemas'
import { revalidatePath } from 'next/cache'
import { type z } from 'zod'

export const addTable = async (
  values: z.infer<typeof AddTableSchema>
): Promise<{
  error?: string | undefined
  success?: string | undefined
}> => {
  const validatedFields = AddTableSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid Fields!' }
  }

  const { tableNumber, tableSize, tableStatus, userId, tableQrCode } = validatedFields.data

  const existingTable = await getTableByTableNumber(tableNumber)

  if (existingTable !== null) {
    return { error: 'Table Already Exists' }
  }

  try {
    await db.table.create({
      data: {
        tableNumber,
        tableSize,
        tableStatus,
        userId,
        tableQrCode
      }
    })

    revalidatePath('/tables')

    return { success: 'Successfully Created Table!' }
  } catch (error) {
    console.error('Error Creating Table:', error)
    return { error: 'Internal Server Error' }
  }
}
