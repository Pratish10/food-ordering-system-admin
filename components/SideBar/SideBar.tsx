'use client'

import React, { useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { Button } from '@/components/ui/button'
import {
  ChevronRight,
  ChevronLeft
} from 'lucide-react'

import { Nav } from '@/components/SideBar/Nav'
import { sideBarLinks } from '@/Constants/index'

export const SideBar = (): JSX.Element | null => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const [expandedDropdowns, setExpandedDropdowns] = useState<string[]>([])
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (!isDesktop) {
    return null
  }

  return (
    <div
      className={`relative ${
        isCollapsed ? 'w-20' : 'min-w-[100px]'
      } border-r px-3 pb-10 pt-20 transition-all duration-300 min-h-screen`}
    >
      <div className="absolute right-[-20px] top-12">
        <Button
          variant="secondary"
          className="rounded-full bg-orange-300 hover:bg-orange-300 p-3"
          onClick={() => {
            setIsCollapsed(!isCollapsed)
            setExpandedDropdowns([])
          }}
        >
          {isCollapsed ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
        </Button>
      </div>
      <Nav
        isDesktop={isDesktop}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        expandedDropdowns={expandedDropdowns}
        setExpandedDropdowns={setExpandedDropdowns}
        Links={sideBarLinks}
      />
    </div>
  )
}
