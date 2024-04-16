'use server'

import { ProfileSchema } from '@/schemas'
import { type z } from 'zod'
import { currentProfile } from '@/lib/current-user'
import { getUserById } from '@/Data/user'
import { db } from '@/lib/db'

export const updateUser = async (values: z.infer<typeof ProfileSchema>): Promise<{
  error?: string
  success?: string
}> => {
  const user = await currentProfile()

  if (user == null || user === undefined) {
    return { error: 'Unauthorized' }
  }

  const validatedFields = ProfileSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid Fields!' }
  }

  const dbUser = await getUserById(user.id)

  if (dbUser == null) {
    return { error: 'Unauthorized' }
  }

  try {
    await db.user.update({
      where: { id: user.id },
      data: {
        ...values
      }
    })

    return { success: 'Profile Updated' }
  } catch (error) {
    console.error('Error Updating User:', error)
    return { error: 'Internal Server Error' }
  }
}
