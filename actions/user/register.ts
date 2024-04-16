'use server'
import { RegisterSchema } from '@/schemas'
import { type z } from 'zod'
import bcryptjs from 'bcryptjs'
import { db } from '@/lib/db'
import { getUserByEmail } from '@/Data/user'
import { generateVerificationToken } from '@/lib/token'
import { sendVerificationEmail } from '@/lib/mail'

export const register = async (
  values: z.infer<typeof RegisterSchema>
): Promise<{
  error?: string | undefined
  success?: string | undefined
}> => {
  const validatedFields = RegisterSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid Fields!' }
  }
  const { name, email, password } = validatedFields.data
  const encryptedPassword = await bcryptjs.hash(password, 10)

  const existingUser = await getUserByEmail(email)

  if (existingUser !== null) {
    return { error: 'User already exists!' }
  }

  try {
    await db.user.create({
      data: {
        name,
        email,
        encryptedPassword
      }
    })

    const verificationToken = await generateVerificationToken(email)

    await sendVerificationEmail(verificationToken.email, verificationToken.token)

    return { success: 'A verification mail has been sent to your email id!' }
  } catch (error) {
    console.error('Error Registering User', error)
    return { error: 'Internal Server Error' }
  }
}
