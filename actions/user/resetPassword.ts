'use server'

import type * as z from 'zod'

import { ResetSchema } from '@/schemas'
import { getUserByEmail } from '@/Data/user'
import { generatePasswordResetToken } from '@/lib/token'
import { sendPasswordResetEmail } from '@/lib/mail'

export const resetPassword = async (
  data: z.infer<typeof ResetSchema>
): Promise<{
  error?: string | undefined
  success?: string | undefined
}> => {
  const validatedFields = ResetSchema.safeParse(data)

  if (!validatedFields.success) {
    return { error: 'Invalid Fields!' }
  }

  const { email } = validatedFields.data

  const existingUser = await getUserByEmail(email)

  if (existingUser == null) {
    return { error: 'Email not found!' }
  }

  const passwordResetToken = await generatePasswordResetToken(email)

  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  )

  return { success: 'Reset email Sent!' }
}
