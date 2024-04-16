import { auth } from '@/auth'
import { type $Enums } from '@prisma/client'
import { type User } from 'next-auth'

export const currentProfile = async (): Promise<
| (User & {
  role: $Enums.UserRole
})
| null
> => {
  const session = await auth()

  if (session == null) {
    return null
  }

  return session?.user
}
