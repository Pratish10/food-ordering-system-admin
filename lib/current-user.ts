import { auth } from '@/auth'
import { type User } from 'next-auth'

export const currentProfile = async (): Promise<User | null | undefined> => {
  const session = await auth()

  if (session == null) {
    return null
  }

  return session?.user
}
