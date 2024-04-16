import { type UserRole } from '@prisma/client'
import { type DefaultSession } from 'next-auth'

// We can extend the session user type provided by next auth in this way
declare module 'next-auth' {
  interface User {
    role: UserRole
    isTwoFactorEnabled: boolean
  }
  interface Session extends DefaultSession {
    user?: User
  }
}
