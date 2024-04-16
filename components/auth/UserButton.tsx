'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { DialogBox } from '@/components/DialogBox'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { logout } from '@/actions/user/logout'

export const UserButton = (): JSX.Element => {
  const [showDialog, setShowDialog] = useState<boolean>(false)

  const user = useCurrentUser()
  const router = useRouter()

  const logOutHandler = (): void => {
    setShowDialog(true)
  }

  const closeDialog = (): void => {
    setShowDialog(false)
  }

  const onLogout = (): void => {
    void logout()
  }

  const avatarFallBack = (user?.name ?? 'Unknown')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('')

  return (
    <React.Fragment>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="border border-black">
            <AvatarImage src={user?.image ?? ''} />
            <AvatarFallback>{avatarFallBack}</AvatarFallback>
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
          <DropdownMenuItem onClick={logOutHandler}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogBox
        header="Logout"
        content={
          <React.Fragment>Are you Sure you want to Logout ?</React.Fragment>
        }
        show={showDialog}
        onClose={closeDialog}
        onAction={onLogout}
        onActionButtonLabel="Logout"
      />
    </React.Fragment>
  )
}
