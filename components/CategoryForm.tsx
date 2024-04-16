/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { type z } from 'zod'
import { Input } from '@/components/ui/input'
import { useTransition } from 'react'
import { AddCategorySchema } from '@/schemas'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import ClipLoader from 'react-spinners/ClipLoader'
import { addCategory } from '@/actions/categories/add-category'
import { useCurrentUser } from '@/hooks/useCurrentUser'

export const CategoryForm = (): JSX.Element => {
  const [isPending, startTransition] = useTransition()
  const user = useCurrentUser()

  const form = useForm<z.infer<typeof AddCategorySchema>>({
    resolver: zodResolver(AddCategorySchema),
    defaultValues: {
      category: '',
      userId: user?.id
    }
  })

  const submitHandler = (values: z.infer<typeof AddCategorySchema>): void => {
    startTransition(() => {
      void addCategory(values).then((data) => {
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
          <DialogTitle className="flex justify-center">Add Category</DialogTitle>
        </DialogHeader>
        <FormField
          control={form.control}
          name="category"
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder="Category" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogFooter>
          <Button type="submit" variant="orange" className="w-full">
            {isPending ? <ClipLoader color='white' size={20} /> : 'Add Category'}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  )
}
