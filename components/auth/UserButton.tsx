'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { User } from 'lucide-react'
import { LogOutButton } from './LogOutButton'
import { useRouter } from 'next/navigation'

export const UserButton = (): JSX.Element => {
  const user = useCurrentUser()
  const router = useRouter()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image ?? ''} />
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => {
            router.push('/profile')
          }}
        >
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOutButton>Logout</LogOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
