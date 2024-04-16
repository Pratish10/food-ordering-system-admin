/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { useForm } from 'react-hook-form'
import type * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { useSearchParams } from 'next/navigation'

import { NewPasswordSchema } from '@/schemas'
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
import { FormError } from '@/components/FormError'
import { FormSuccess } from '@/components/FormSuccess'
import { AuthCard } from './AuthCard'
import { newPassword } from '@/actions/user/newPassword'

export const NewPasswordForm = (): JSX.Element => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')

  const [isPending, startTransition] = useTransition()

  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: ''
    }
  })

  const submitHandler = (values: z.infer<typeof NewPasswordSchema>): void => {
    setError('')
    setSuccess('')

    startTransition(() => {
      void newPassword(values, token).then((data) => {
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
  }
  return (
    <AuthCard
      headerLabel=""
      backButtonTo="/auth/login"
      backButtonLabel="Back to Login Page"
      cardTitle='Reset yout password'
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-6">
          <div className="space-y-4">
            <FormError message={error} />
            <FormSuccess message={success} />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="******"
                      type="password"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" variant='orange' className="w-full" disabled={isPending}>
            Reset Password
          </Button>
        </form>
      </Form>
    </AuthCard>
  )
}
