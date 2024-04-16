'use client'

import { Button } from '@/components/ui/button'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { signIn } from 'next-auth/react'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

export const SocialButton = (): JSX.Element => {
  const socialLogin = (provider: 'google' | 'github'): void => {
    void signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT
    })
  }
  return (
    <div className="flex space-x-6 items-center justify-center w-full">
      <Button
        variant="ghost"
        className="flex items-center w-full rounded-md border border-slate-700"
        onClick={() => {
          socialLogin('google')
        }}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        variant="ghost"
        className="flex items-center w-full rounded-md border border-slate-700"
        onClick={() => {
          socialLogin('github')
        }}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  )
}
