import { db } from '@/lib/db'
import { type verificationToken } from '@prisma/client'

export const getVerificationTokenByEmail = async (email: string): Promise<verificationToken | null> => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: { email }
    })
    return verificationToken
  } catch {
    return null
  }
}
export const getVerificationTokenByToken = async (token: string): Promise<verificationToken | null> => {
  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: { token }
    })
    return verificationToken
  } catch {
    return null
  }
}
