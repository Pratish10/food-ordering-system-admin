'use client'

import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const BreadCrumbs = (): JSX.Element => {
  const pathname = usePathname()

  const crumb = pathname.split('/')

  return (
    <div className="flex items-center text-sm my-1 mb-5">
      <Link href="/" className="text-orange-500 hover:underline">
        Home
      </Link>
      <ChevronRight size={15} />
      {crumb[1]}
    </div>
  )
}

export default BreadCrumbs
