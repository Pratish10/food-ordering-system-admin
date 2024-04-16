/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { useForm } from 'react-hook-form'
import type * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'

import { ResetSchema } from '@/schemas'
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
import { resetPassword } from '@/actions/user/resetPassword'

export const ResetForm = (): JSX.Element => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')

  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: ''
    }
  })

  const submitHandler = (values: z.infer<typeof ResetSchema>): void => {
    setError('')
    setSuccess('')

    startTransition(() => {
      void resetPassword(values).then((data) => {
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
  }

  return (
    <AuthCard
      headerLabel=''
      cardTitle="Reset Password"
      backButtonLabel="Back to Login Page"
      backButtonTo="/auth/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-6">
          <div className="space-y-4">
            <FormError message={error} />
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
          </div>
          <Button type="submit" variant='orange' className="w-full" disabled={isPending}>
            Send reset email
          </Button>
        </form>
      </Form>
    </AuthCard>
  )
}
