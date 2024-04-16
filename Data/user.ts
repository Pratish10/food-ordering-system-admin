import { db } from '@/lib/db'
import { type User } from '@prisma/client'

export const getUserById = async (userId: string | undefined): Promise<User | null> => {
  try {
    const user = await db.user.findUnique({
      where: { id: userId }
    })

    return user
  } catch {
    return null
  }
}

export const getUserByEmail = async (email: string | undefined): Promise<User | null> => {
  try {
    const user = await db.user.findUnique({
      where: { email }
    })

    return user
  } catch {
    return null
  }
}
