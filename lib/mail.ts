import { Resend } from 'resend'

import {
  EmailTemplate,
  PasswordResetEmail,
  SendTwoFactorMailTemplate
} from '@/components/auth/EmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

const domain = process.env.ADMIN_PUBLIC_URL

export const sendVerificationEmail = async (
  email: string,
  token: string
): Promise<void> => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`

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
  const confirmLink = `${domain}/auth/new-password?token=${token}`

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Reset your Password',
    react: PasswordResetEmail({ confirmLink })
  })
}

export const sendTwoFactorTokenEmail = async (
  email: string,
  token: string
): Promise<void> => {
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Your 2FA Code',
    react: SendTwoFactorMailTemplate({ token })
  })
}
