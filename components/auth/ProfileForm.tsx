/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { type z } from 'zod'
import React, { useState, useTransition } from 'react'
import { toast } from 'sonner'
import { ProfileSchema } from '@/schemas/index'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import ClipLoader from 'react-spinners/ClipLoader'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Switch } from '../ui/switch'
import { updateUser } from '@/actions/user/update-user'
import { useSession } from 'next-auth/react'

export const ProfileForm = (): JSX.Element => {
  const [isPending, startTransition] = useTransition()
  const [editForm, setEditForm] = useState<boolean>(false)
  const user = useCurrentUser()
  const { update } = useSession()

  const avatarFallBack = (user?.name ?? 'Unknown')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('')

  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: user?.name ?? undefined,
      isTwoFactorEnabled: user?.isTwoFactorEnabled ?? undefined
    }
  })

  const submitHandler = (values: z.infer<typeof ProfileSchema>): void => {
    if (editForm) {
      startTransition(() => {
        void updateUser(values)
          .then((data) => {
            if (data?.success) {
              toast.success(data?.success)
              setEditForm(false)
            }
            if (data?.error) {
              toast.error(data?.error)
              setEditForm(false)
            }
          })
          .then(async () => await update())
      })
    }
  }

  return (
    <React.Fragment>
      <div className="flex justify-end items-center py-4">
        <Button
          onClick={() => {
            setEditForm(!editForm)
          }}
          variant="outline"
          className="px-4 py-2 mx-5 border border-black"
          disabled={isPending}
        >
          {isPending ? <ClipLoader size={20} /> : 'Edit'}
        </Button>
      </div>
      <Form {...form}>
        <form
          className="grid grid-cols-3 gap-4"
          onSubmit={form.handleSubmit(submitHandler)}
        >
          <div className="col-span-3 sm:col-span-1 border rounded-md p-4 flex flex-col items-center justify-center relative group">
            <div className="flex flex-col items-center">
              <Avatar className="border border-black w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                <AvatarImage src={user?.image ?? ''} />
                <AvatarFallback>{avatarFallBack}</AvatarFallback>
              </Avatar>
              <div className="mt-2 text-center">
                <p className="font-bold">{user?.name ?? 'Unknown'}</p>
                <p className="text-sm text-gray-500">
                  {user?.email ?? 'Unknown'}
                </p>
                <p className="text-sm text-gray-500">
                  {user?.role ?? 'Unknown'}
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-3 sm:col-span-2 border rounded-md p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 p-3 gap-4">
              <FormField
                control={form.control}
                name="name"
                disabled={isPending || !editForm}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 p-3 gap-4">
              <FormField
                control={form.control}
                name="isTwoFactorEnabled"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>Enable 2FA</FormLabel>
                      <FormDescription>
                        Enable two-factor authentication to add an extra layer of security to your account.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        disabled={isPending || !editForm}
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-end my-10">
              <Button variant="orange" type="submit" disabled={isPending || !editForm}>
                {isPending ? <ClipLoader color="white" size={20} /> : 'Update'}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </React.Fragment>
  )
}
