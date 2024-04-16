'use server'
import { LoginSchema } from '@/schemas'
import { type z } from 'zod'
import { signIn } from '@/auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { AuthError } from 'next-auth'
import { getUserByEmail } from '@/Data/user'
import { generateTwoFactorToken, generateVerificationToken } from '@/lib/token'
import { sendTwoFactorTokenEmail, sendVerificationEmail } from '@/lib/mail'
import { getTwoFacTokenByEmail } from '@/Data/two-factor-token'
import { db } from '@/lib/db'
import { getTwoFactorConfirmationByUserId } from '@/Data/two-factor-confirmation'

export const login = async (
  values: z.infer<typeof LoginSchema>
): Promise<{
  error?: string | undefined
  success?: string | undefined
  twoFactor?: boolean
}> => {
  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid Fields!' }
  }
  const { email, password, code } = validatedFields.data

  const existingUser = await getUserByEmail(email)

  if (existingUser?.email == null || existingUser.encryptedPassword == null) {
    return { error: 'Email does not exists!' }
  }

  if (existingUser.emailVerified == null) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    )

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    )

    return { success: 'A verification mail has been sent to your email id!' }
  }

  if (existingUser.isTwoFactorEnabled && (existingUser.email !== '')) {
    if (code != null) {
      const twoFactorToken = await getTwoFacTokenByEmail(existingUser.email)

      if (twoFactorToken == null) {
        return { error: 'Invalid Code' }
      }

      if (twoFactorToken.token !== code) {
        return { error: 'Invalide Code' }
      }

      const hasExpired = new Date(twoFactorToken.expires) < new Date()

      if (hasExpired) {
        return { error: 'Code Expired' }
      }

      await db.twofactorToken.delete({
        where: { id: twoFactorToken.id }
      })

      const existingConfirmation = await getTwoFactorConfirmationByUserId(
        existingUser.email
      )

      if (existingConfirmation != null) {
        await db.twoFactorConfirmation.delete({
          where: { id: existingConfirmation.id }
        })
      }

      await db.twoFactorConfirmation.create({
        data: {
          userId: existingUser.id
        }
      })
    } else {
      const twofactorToken = await generateTwoFactorToken(existingUser.email)
      await sendTwoFactorTokenEmail(twofactorToken.email, twofactorToken.token)

      return { twoFactor: true }
    }
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === 'CredentialsSignin') {
        return { error: 'Invalid Credentials!' }
      } else {
        return { error: 'Something went wrong!' }
      }
    }
    throw error
  }

  return { success: 'A verification mail has been sent to your email id!' }
}
