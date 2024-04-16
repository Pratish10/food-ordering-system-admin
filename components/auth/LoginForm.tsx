/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { AuthCard } from '@/components/auth/AuthCard'

import { useForm } from 'react-hook-form'
import type * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { LoginSchema } from '@/schemas'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
} from '@/components/ui/input-otp'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState, useTransition } from 'react'
import { FormError } from '../FormError'
import { FormSuccess } from '../FormSuccess'
import { login } from '@/actions/user/login'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export const LoginForm = (): JSX.Element => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [showTwoFactor, setShowTwoFactor] = useState<boolean>(false)

  const [isPending, startTransition] = useTransition()

  const searchParams = useSearchParams()

  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked'
      ? 'Another account already exists with the same email address'
      : ''

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const submitHandler = (values: z.infer<typeof LoginSchema>): void => {
    setError('')
    setSuccess('')

    startTransition(() => {
      void login(values)
        .then((data) => {
          if (data?.error != null) {
            form.reset()
            setError(data?.error)
          }
          if (data?.success != null) {
            form.reset()
            setError(data?.success)
          }
          if (data?.twoFactor === true) {
            setShowTwoFactor(true)
          }
        })
        .catch(() => {
          setError('Something Went Wrong!')
        })
    })
  }

  return (
    <AuthCard
      isSocialbutton
      headerLabel="Login"
      cardTitle="Food Ordering System"
      backButtonLabel="Didn't have an account?"
      backButtonTo="/auth/register"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-6">
          <div className="space-y-4">
            <FormError message={error ?? urlError} />
            <FormSuccess message={success} />
            {showTwoFactor && (
              <div className="flex items-center justify-center">
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center justify-center">
                        Two Factor Code
                      </FormLabel>
                      <FormControl>
                        <InputOTP maxLength={6} {...field}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                          </InputOTPGroup>
                          <InputOTPSeparator />
                          <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
            {!showTwoFactor && (
              <>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="example@example.com"
                          type="email"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="******"
                          type="password"
                          disabled={isPending}
                        />
                      </FormControl>
                      <Button
                        className="flex justify-end px-0 font-normal w-full"
                        variant="link"
                        size="sm"
                        asChild
                      >
                        <Link href="/auth/reset-password">
                          Forgot Password?
                        </Link>
                      </Button>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
          </div>
          <Button
            type="submit"
            variant="orange"
            className="w-full"
            disabled={isPending}
          >
            {showTwoFactor ? 'Confirm' : 'Login'}
          </Button>
        </form>
      </Form>
    </AuthCard>
  )
}
