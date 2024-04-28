/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'

import { ClipLoader } from 'react-spinners'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { newVerification } from '@/actions/user/new-verification'
import { FormSuccess } from '@/components/FormSuccess'
import { FormError } from '@/components/FormError'
import { AuthCard } from './AuthCard'

export const NewVerificationForm = (): JSX.Element => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')

  const searchParams = useSearchParams()

  const token = searchParams.get('token') ?? ''
  const onSubmit = useCallback(() => {
    if (success ?? error) return
    if (!token) {
      setError('Token Missing!')
    }

    newVerification(token)
      .then((data) => {
        setError(data?.error)
        setSuccess(data?.success)
      })
      .catch(() => {
        setError('Something Went Wrong!')
      })
  }, [token, success, error])

  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  return (
    <AuthCard
      headerLabel="Confirming your verification"
      backButtonTo="/auth/login"
      backButtonLabel="Back to Login Page"
      cardTitle='logo here'
    >
      <div className="flex items-center justify-center w-full">
        {!success && !error && <ClipLoader color="#fa822e" />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </AuthCard>
  )
}
