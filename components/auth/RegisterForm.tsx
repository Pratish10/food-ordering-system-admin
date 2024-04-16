/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { AuthCard } from '@/components/auth/AuthCard'

import { useForm } from 'react-hook-form'
import type * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { RegisterSchema } from '@/schemas'

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
import { register } from '@/actions/user/register'

export const RegisterForm = (): JSX.Element => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')

  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const submitHandler = (values: z.infer<typeof RegisterSchema>): void => {
    setError('')
    setSuccess('')

    startTransition(() => {
      void register(values).then((data) => {
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
  }

  return (
    <AuthCard
      isSocialbutton
      headerLabel="Register"
      cardTitle="Food Ordering System"
      backButtonLabel="Already have an account?"
      backButtonTo="/auth/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-6">
          <div className="space-y-4">
            <FormError message={error} />
            <FormSuccess message={success} />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Username"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            Register
          </Button>
        </form>
      </Form>
    </AuthCard>
  )
}
