/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { type z } from 'zod'
import { useEffect, useState, useTransition } from 'react'
import { toast } from 'sonner'
import { AddMenuSchema } from '@/schemas/index'
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { type Category, type Menu, MenuType } from '@prisma/client'
import ClipLoader from 'react-spinners/ClipLoader'
import { FileUpload } from '../FileUpload'
import { Switch } from '@/components/ui/switch'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { addMenu } from '@/actions/menu/add-menu'
import { updateMenu } from '@/actions/menu/update-menu'
import { cn } from '@/lib/utils'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
interface MenuFormProps {
  type: 'Add' | 'Edit'
  menu?: Menu
  categories: Category[]
}

export const MenuForm = ({
  type,
  menu,
  categories
}: MenuFormProps): JSX.Element => {
  const [category, setCategory] = useState<Array<{ label: string, value: string }>>([])
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const user = useCurrentUser()

  useEffect(() => {
    const modifiedCategory = categories.map((item) => ({
      label: item.category,
      value: item.category
    }))
    setCategory(modifiedCategory)
  }, [categories])

  const defaultValues =
    type === 'Edit' && menu != null
      ? {
          name: menu.name || undefined,
          amount: menu.amount || undefined,
          category: menu.category || undefined,
          description: menu.description || undefined,
          type: menu.type || undefined,
          image: menu.image || undefined,
          isFeatured: menu.isFeatured ?? false,
          userId: user?.id,
          id: menu.id || undefined,
          createdAt: menu.createdAt || undefined,
          updatedAt: menu.updatedAt || undefined
        }
      : {
          name: '',
          amount: '',
          category: '',
          description: '',
          type: MenuType.Vegeterian,
          image: '',
          isFeatured: false,
          userId: user?.id
        }

  const form = useForm<z.infer<typeof AddMenuSchema>>({
    resolver: zodResolver(AddMenuSchema),
    defaultValues
  })

  const submitHandler = (values: z.infer<typeof AddMenuSchema>): void => {
    if (type === 'Add') {
      startTransition(async () => {
        void addMenu(values).then((data) => {
          if (data?.success) {
            toast.success(data?.success)
            router.push('/menus')
          }
          if (data?.error) {
            toast.success(data?.error)
          }
        })
      })
    }

    if (type === 'Edit') {
      if (menu !== undefined) {
        startTransition(async () => {
          void updateMenu(values, menu?.id).then((data) => {
            if (data?.success) {
              toast.success(data?.success)
              router.push('/menus')
            }
            if (data?.error) {
              toast.success(data?.error)
            }
          })
        })
      }
    }
  }

  return (
    <Form {...form}>
      <form
        className="grid grid-cols-3 gap-4"
        onSubmit={form.handleSubmit(submitHandler)}
      >
        <div className="col-span-3 sm:col-span-1 border rounded-md p-4 flex flex-col items-center justify-center relative group">
          <FormField
            control={form.control}
            name="image"
            disabled={isPending}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FileUpload
                    endPoint="menuImage"
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="col-span-3 sm:col-span-2 border rounded-md p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 p-3 gap-4">
            <FormField
              control={form.control}
              name="name"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dish Name</FormLabel>
                  <FormControl>
                    <Input placeholder="French Onion soup" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
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
              name="category"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Category</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            'w-[200px] justify-between',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value
                            ? category.find(
                              (item) => item.value === field.value
                            )?.label
                            : 'Select category'}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search category..." />
                        <CommandList>
                          <CommandEmpty>No category found.</CommandEmpty>
                          <CommandGroup>
                            {category.map((item) => (
                              <CommandItem
                                value={item.label}
                                key={item.value}
                                onSelect={() => {
                                  form.setValue('category', item.value)
                                }}
                              >
                                <Check
                                  className={cn(
                                    'mr-2 h-4 w-4',
                                    item.value === field.value
                                      ? 'opacity-100'
                                      : 'opacity-0'
                                  )}
                                />
                                {item.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dish Type</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      disabled={isPending}
                      {...field}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Type</SelectLabel>
                          <SelectItem value={MenuType.Vegeterian}>
                            Vegeterian
                          </SelectItem>
                          <SelectItem value={MenuType.nonVegeterian}>
                            Non Vegeterian
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className=" p-3">
            <FormField
              control={form.control}
              name="description"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dish Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Slow simmered sweet onions, topped with savory Swiss Cheese and garnished with croutons..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 p-3 gap-4">
            {type === 'Edit' && (
              <FormField
                control={form.control}
                name="isFeatured"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>Featured</FormLabel>
                      <FormDescription>
                        This Dish will appear in feature section
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        disabled={isPending}
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            )}
          </div>

          <div className="flex justify-end my-10">
            {type !== 'Edit' && (
              <Button
                onClick={() => {
                  form.reset()
                }}
                className="bg-red-200 rounded-md px-4 py-2 mx-5 text-red-500 hover:bg-red-500 hover:text-white"
                disabled={isPending}
              >
                {isPending ? <ClipLoader color="bg-red" size={20} /> : 'Clear'}
              </Button>
            )}
            <Button variant="orange" type="submit" disabled={isPending}>
              {type === 'Add' && isPending
                ? (
                <ClipLoader color="white" size={20} />
                  )
                : type === 'Add'
                  ? (
                      'Submit'
                    )
                  : (
                      'Update'
                    )}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
