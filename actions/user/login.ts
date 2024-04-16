'use server'
import { LoginSchema } from '@/schemas'
import { type z } from 'zod'
import { signIn } from '@/auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { AuthError } from 'next-auth'
import { getUserByEmail } from '@/Data/user'
import { generateVerificationToken } from '@/lib/token'
import { sendVerificationEmail } from '@/lib/mail'

export const login = async (
  values: z.infer<typeof LoginSchema>
): Promise<{
  error?: string | undefined
  success?: string | undefined
}> => {
  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid Fields!' }
  }
  const { email, password } = validatedFields.data

  const existingUser = await getUserByEmail(email)

  if (((existingUser?.email) == null) || (existingUser.encryptedPassword == null)) {
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
