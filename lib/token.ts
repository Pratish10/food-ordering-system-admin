import { type PasswordResetToken, type verificationToken } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'
import { db } from './db'
import { getVerificationTokenByEmail } from '@/Data/verification-token'
import { getPasswordResetTokenByEmail } from '@/Data/password-reset-token'

export const generateVerificationToken = async (
  email: string
): Promise<verificationToken> => {
  const token = uuidv4()
  const expires = new Date(new Date().getTime() + 3600 * 1000)

  const existingToken = await getVerificationTokenByEmail(email)

  if (existingToken != null) {
    await db.verificationToken.delete({
      where: { id: existingToken.id }
    })
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires
    }
  })

  return verificationToken
}

export const generatePasswordResetToken = async (email: string): Promise<PasswordResetToken> => {
  const token = uuidv4()
  const expires = new Date(new Date().getTime() + 3600 * 1000)

  const existingToken = await getPasswordResetTokenByEmail(email)

  if (existingToken != null) {
    await db.passwordResetToken.delete({
      where: { id: existingToken.id }
    })
  }

  const passwordResetToken = await db.passwordResetToken.create({
    data: {
      email,
      token,
      expires
    }
  })

  return passwordResetToken
}
