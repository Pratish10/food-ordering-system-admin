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

const BreadCrumbs = (): JSX.Element => {
  const router = useRouter()
  const pathname = usePathname()

  const crumb = pathname.split('/').filter(Boolean)

  return (
    <div className="flex items-center text-sm my-1 mb-5">
      <Breadcrumb>
        <BreadcrumbList>
          {pathname.startsWith('/') && (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink
                  onClick={() => { router.push('/') }}
                  className={pathname === '/' ? 'active' : ''}
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              {pathname !== '/' && <BreadcrumbSeparator />}
            </>
          )}
          {crumb.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink
                  onClick={() => { router.push(`/${crumb.slice(0, index + 1).join('/')}`) }}
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

export default BreadCrumbs
