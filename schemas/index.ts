import { MenuType } from '@prisma/client'
import * as z from 'zod'

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required'
  }),
  email: z.string().email({
    message: 'Email is required'
  }),
  password: z.string().min(6, {
    message: 'Minimum 6 characters required'
  })
})

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required'
  }),
  password: z.string().min(1, {
    message: 'Password is required'
  }),
  code: z.optional(z.string())
})

export const ResetSchema = z.object({
  email: z.string().email({
    message: 'Email is required'
  })
})

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'Minimum 6 characters required'
  })
})

export const AddMenuSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required'
  }),
  description: z.string().min(1, {
    message: 'Description is required'
  }),
  type: z.enum([MenuType.Vegeterian, MenuType.nonVegeterian]).refine((value) => value !== '', {
    message: 'Type of dish is required'
  }),
  category: z.string().min(1, {
    message: 'Category is required'
  }),
  amount: z
    .string()
    .refine((value) => value.trim() !== '', {
      message: 'Amount is required'
    })
    .refine(
      (value) => {
        if (value.trim() !== '') {
          const parsedValue = parseInt(value, 10)
          return !isNaN(parsedValue) && parsedValue >= 0
        }
        return false
      },
      {
        message: 'Amount must be a number more than 0'
      }
    ),
  image: z.string().min(1, {
    message: 'Image is required'
  }),
  isFeatured: z.boolean().optional(),
  userId: z.string().min(1, {
    message: 'UserId is required'
  })
})

export const AddTableSchema = z.object({
  tableNumber: z.string().min(1, {
    message: 'Table Number is required'
  }),
  tableSize: z
    .string()
    .refine((value) => value.trim() !== '')
    .refine(
      (value) => {
        if (value.trim() !== '') {
          const parsedValue = parseInt(value, 10)
          return !isNaN(parsedValue) && parsedValue >= 0
        }
        return false
      },
      {
        message: 'Table Size must be a number'
      }
    ),
  tableStatus: z.string().min(1),
  userId: z.string().min(1, {
    message: 'UserId is required'
  })
})

export const AddCategorySchema = z.object({
  category: z.string().min(1, {
    message: 'Category is required'
  }),
  userId: z.string().min(1, {
    message: 'UserId is required'
  })
})

export const ProfileSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required'
  }),
  isTwoFactorEnabled: z.boolean().optional()
})
