'use client'

import { useRouter, usePathname } from 'next/navigation'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import React from 'react'
import { Button } from './ui/button'
import { ChevronLeft } from 'lucide-react'

export const BreadCrumbs = (): JSX.Element => {
  const router = useRouter()
  const pathname = usePathname()

  const crumb = pathname.split('/').filter(Boolean)

  return (
    <div className="flex items-center text-sm my-1 mb-5 px-5 pt-5 space-x-4">
      {pathname !== '/' && <Button
        variant="outline"
        size="icon"
        className="h-7 w-7"
        onClick={() => {
          router.back()
        }}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Back</span>
      </Button> }
      <Breadcrumb>
        <BreadcrumbList>
          {pathname.startsWith('/') && (
            <React.Fragment>
              <BreadcrumbItem>
                <BreadcrumbLink
                  onClick={() => {
                    router.push('/')
                  }}
                  className="cursor-pointer"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              {pathname !== '/' && <BreadcrumbSeparator />}
            </React.Fragment>
          )}
          {crumb.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="cursor-pointer"
                  onClick={() => {
                    router.push(`/${crumb.slice(0, index + 1).join('/')}`)
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < crumb.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
