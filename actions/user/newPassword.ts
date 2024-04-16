'use server'

import type * as z from 'zod'
import bcryptjs from 'bcryptjs'

import { getUserByEmail } from '@/Data/user'
import { db } from '@/lib/db'
import { NewPasswordSchema } from '@/schemas'
import { getPasswordResetTokenByToken } from '@/Data/password-reset-token'

export const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null
): Promise<{
  error?: string | undefined
  success?: string | undefined
}> => {
  if (token == null) {
    return { error: 'Token does not exists!' }
  }

  const validatedFields = NewPasswordSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid Field!' }
  }

  const { password } = validatedFields.data

  const existingToken = await getPasswordResetTokenByToken(token)

  if (existingToken == null) {
    return { error: 'Invalid Token!' }
  }

  const hasExpired = new Date(existingToken.expires) < new Date()

  if (hasExpired) {
    return { error: 'Your token has expired!' }
  }

  const existingUser = await getUserByEmail(existingToken.email)

  if (existingUser == null) {
    return { error: 'Email does not exists!' }
  }

  const encryptedPassword = await bcryptjs.hash(password, 10)

  try {
    await db.user.update({
      where: { id: existingUser.id },
      data: { encryptedPassword }
    })

    await db.passwordResetToken.delete({
      where: { id: existingToken.id }
    })

    return { success: 'Password Updated!' }
  } catch (error) {
    console.error('Error Updating new password:', error)
    return { error: 'Internal Server Error' }
  }
}
