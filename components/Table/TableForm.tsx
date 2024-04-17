/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { type z } from 'zod'
import React, { useState, useTransition } from 'react'
import { toast } from 'sonner'
import { AddTableSchema } from '@/schemas/index'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { TableStatus, type Table } from '@prisma/client'
import ClipLoader from 'react-spinners/ClipLoader'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import Image from 'next/image'

interface TableFormProps {
  table?: Table
}

export const TableForm = ({ table }: TableFormProps): JSX.Element => {
  const [editForm, setEditForm] = useState<boolean>(false)
  const [isPending, startTransition] = useTransition()
  const user = useCurrentUser()

  const form = useForm<z.infer<typeof AddTableSchema>>({
    resolver: zodResolver(AddTableSchema),
    defaultValues: {
      tableNumber: table?.tableNumber ?? undefined,
      tableSize: table?.tableSize ?? undefined,
      userId: user?.id,
      tableStatus: table?.tableStatus,
      tableQrCode: table?.tableQrCode ?? undefined
    }
  })

  const submitHandler = (values: z.infer<typeof AddTableSchema>): void => {
    if (editForm) {
      startTransition(() => {
        toast(JSON.stringify(values))
        setEditForm(false)
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
        <Image src={table?.tableQrCode ?? ''} alt="TableQr" width="400" height="400" />
              <div className="mt-2 text-center">
                <p className="text-sm text-gray-500">
                  Scan the qr code in order to see the menus
                </p>
              </div>
            </div>
        </div>

        <div className="col-span-3 sm:col-span-2 border rounded-md p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 p-3 gap-4">
            <FormField
              control={form.control}
              name="tableNumber"
              disabled={isPending || !editForm}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Table Number</FormLabel>
                  <FormControl>
                    <Input placeholder="French Onion soup" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tableSize"
              disabled={isPending || !editForm}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Table Size</FormLabel>
                  <FormControl>
                    <Input placeholder="Price of dish" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 p-3 gap-4">
            <FormField
              control={form.control}
              name="tableStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Table Status</FormLabel>
                  <FormControl>
                  <Select
                      onValueChange={field.onChange}
                      disabled={isPending || !editForm}
                      {...field}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Change TAble Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Table Status</SelectLabel>
                          <SelectItem value={TableStatus.Vacant}>Vacant</SelectItem>
                          <SelectItem value={TableStatus.Occupied}>Occupied</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
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
