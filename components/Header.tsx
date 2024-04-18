'use client'
import { Button } from '@/components/ui/button'
import {
  AlignLeft,
  BellIcon,
  LayoutDashboard,
  CookingPot,
  Dot,
  CircleUser,
  Table
} from 'lucide-react'
import { useMediaQuery } from 'usehooks-ts'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Nav } from './SideBar/Nav'
import { useState } from 'react'
import { UserButton } from './auth/UserButton'
import { useCurrentUser } from '@/hooks/useCurrentUser'

export const Header = (): JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const [expandedDropdowns, setExpandedDropdowns] = useState<string[]>([])
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const user = useCurrentUser()

  return (
    <div className="flex justify-between border-b p-2 space-x-4">
      {!isDesktop && (
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger>
              <AlignLeft />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Logo here</SheetTitle>
                <SheetDescription>
                  <Nav
                    isDesktop={isDesktop}
                    isCollapsed={isCollapsed}
                    setIsCollapsed={setIsCollapsed}
                    expandedDropdowns={expandedDropdowns}
                    setExpandedDropdowns={setExpandedDropdowns}
                    Links={[
                      {
                        path: '/',
                        label: 'Dashboard',
                        icon: LayoutDashboard,
                        isDropdown: false
                      },
                      {
                        path: '/tables',
                        label: 'Tables',
                        icon: Table,
                        isDropdown: false
                      },
                      {
                        label: 'Menu',
                        icon: CookingPot,
                        isDropdown: true,
                        dropdown: [
                          { path: '/addmenu', label: 'Add Menu', icon: Dot },
                          { path: '/menus', label: 'Menus List', icon: Dot }
                        ]
                      },
                      {
                        path: '/profile',
                        label: 'Profile',
                        icon: CircleUser,
                        isDropdown: false
                      }
                    ]}
                  />
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      )}

      <div className="flex ml-auto items-center space-x-4">
        <Button
          variant="outline"
          className="rounded-full border border-slate-800 p-2"
        >
          <BellIcon size={20} />
        </Button>
        <div className="flex items-center">
          <UserButton />
          <div className="hidden md:flex flex-col justify-center items-start p-2">
            <p>{user?.name}</p>
            <p className="text-slate-600 text-xs">{user?.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
