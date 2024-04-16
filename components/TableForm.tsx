/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { type z } from 'zod'
import { Input } from '@/components/ui/input'
import { useTransition } from 'react'
import { AddTableSchema } from '@/schemas'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

import { toast } from 'sonner'
import { addTable } from '@/actions/Tables/add-table'
import ClipLoader from 'react-spinners/ClipLoader'

import { useCurrentUser } from '@/hooks/useCurrentUser'

export const TableForm = (): JSX.Element => {
  const [isPending, startTransition] = useTransition()
  const user = useCurrentUser()

  const form = useForm<z.infer<typeof AddTableSchema>>({
    resolver: zodResolver(AddTableSchema),
    defaultValues: {
      tableNumber: '',
      tableSize: '',
      tableStatus: 'Vacant',
      userId: user?.id
    }
  })

  const submitHandler = (values: z.infer<typeof AddTableSchema>): void => {
    startTransition(() => {
      void addTable(values).then((data) => {
        if (data?.success != null) {
          toast.success(data?.success)
          close()
        }
        if (data?.error != null) {
          toast.error(data?.error)
        }
      })
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className="grid gap-4 py-4"
      >
        <DialogHeader>
          <DialogTitle className="flex justify-center">Add Table</DialogTitle>
        </DialogHeader>
        <FormField
          control={form.control}
          name="tableNumber"
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Table Number</FormLabel>
              <FormControl>
                <Input placeholder="Table Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tableSize"
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Table Size</FormLabel>
              <FormControl>
                <Input placeholder="Table Size" {...field} />
              </FormControl>
              <FormDescription>
                Number of customers that can be seated at this table. Should be
                number
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogFooter>
          <Button type="submit" variant="orange" className="w-full">
            {isPending ? <ClipLoader color="white" size={20} /> : 'Add Table'}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  )
}
