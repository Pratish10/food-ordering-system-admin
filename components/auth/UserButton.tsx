'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { LogOutButton } from './LogOutButton'
import { useRouter } from 'next/navigation'

export const UserButton = (): JSX.Element => {
  const user = useCurrentUser()
  const router = useRouter()

  const avatarFallBack = (user?.name ?? 'Unknown')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className='border border-black'>
          <AvatarImage src={user?.image ?? ''} />
          <AvatarFallback>
            {avatarFallBack}
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
