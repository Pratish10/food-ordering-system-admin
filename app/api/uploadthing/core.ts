import { auth } from '@/auth'
import { createUploadthing, type FileRouter } from 'uploadthing/next'

const f = createUploadthing()

const handleAuth = async (): Promise<{
  userId: string | undefined
}> => {
  const session = await auth()
  if (session?.user == null) {
    throw new Error('Unauthorised')
  }
  return { userId: session.user.id }
}

export const ourFileRouter = {
  menuImage: f({ image: { maxFileSize: '4MB', maxFileCount: 1 } })
    .middleware(async () => await handleAuth())
    .onUploadComplete(() => {})
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
