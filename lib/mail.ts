import { Resend } from 'resend'

import {
  EmailTemplate,
  PasswordResetEmail
} from '@/components/auth/EmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendVerificationEmail = async (
  email: string,
  token: string
): Promise<void> => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Verify your email',
    react: EmailTemplate({ confirmLink })
  })
}

export const sendPasswordResetEmail = async (
  email: string,
  token: string
): Promise<void> => {
  const confirmLink = `http://localhost:3000/auth/new-password?token=${token}`

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Reset your Password',
    react: PasswordResetEmail({ confirmLink })
  })
}
