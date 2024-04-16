'use server'

import { getUserByEmail } from '@/Data/user'
import { getVerificationTokenByToken } from '@/Data/verification-token'
import { db } from '@/lib/db'

export const newVerification = async (
  token: string
): Promise<{
  error?: string | undefined
  success?: string | undefined
}> => {
  const existingToken = await getVerificationTokenByToken(token)
  if (existingToken == null) {
    return { error: 'Token does not exists!' }
  }

  const hasExpired = new Date(existingToken.expires) < new Date()

  if (hasExpired) {
    return { error: 'Your token has expired!' }
  }

  const existingUser = await getUserByEmail(existingToken.email)

  if (existingUser == null) {
    return { error: 'Email doesnot exists!' }
  }

  try {
    await db.user.update({
      where: { id: existingUser.id },
      data: { emailVerified: new Date(), email: existingUser.email }
    })

    await db.verificationToken.delete({
      where: { id: existingToken.id }
    })

    return { success: 'Email Verified!' }
  } catch (error) {
    console.error('Error verifying the user:', error)
    return { error: 'Internal Servver Error' }
  }
}
