import { db } from '@/lib/db'
import { type TwofactorToken } from '@prisma/client'

export const getTwoFacTokenByToken = async (
  token: string
): Promise<TwofactorToken | null> => {
  try {
    const tokenFactorToken = await db.twofactorToken.findUnique({
      where: { token }
    })
    return tokenFactorToken
  } catch (error) {
    return null
  }
}

export const getTwoFacTokenByEmail = async (
  email: string
): Promise<TwofactorToken | null> => {
  try {
    const tokenFactorToken = await db.twofactorToken.findUnique({
      where: { email }
    })
    return tokenFactorToken
  } catch (error) {
    console.error(error)
    return null
  }
}
