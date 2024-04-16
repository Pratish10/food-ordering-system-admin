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
      void login(values).then((data) => {
        setError(data?.error)
        setSuccess(data?.success)
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
                    <Link href="/auth/reset-password">Forgot Password?</Link>
                  </Button>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            variant="orange"
            className="w-full"
            disabled={isPending}
          >
            Login
          </Button>
        </form>
      </Form>
    </AuthCard>
  )
}
