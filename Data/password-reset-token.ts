import { db } from '@/lib/db'
import { type PasswordResetToken } from '@prisma/client'

export const getPasswordResetTokenByEmail = async (
  email: string
): Promise<PasswordResetToken | null> => {
  try {
    const passwordResetToken = await db.passwordResetToken.findUnique({
      where: { email }
    })

    return passwordResetToken
  } catch {
    return null
  }
}

export const getPasswordResetTokenByToken = async (
  token: string
): Promise<PasswordResetToken | null> => {
  try {
    const passwordResetToken = await db.passwordResetToken.findUnique({
      where: { token }
    })

    return passwordResetToken
  } catch {
    return null
  }
}
