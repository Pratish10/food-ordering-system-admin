import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { BackLink } from './BackLink'
import { SocialButton } from './SocialButton'
import React from 'react'

interface AuthCardProps {
  children: React.ReactNode
  cardTitle: string
  headerLabel: string
  isSocialbutton?: boolean
  backButtonLabel: string
  backButtonTo: string
}

export const AuthCard = ({
  children,
  cardTitle,
  headerLabel,
  isSocialbutton,
  backButtonLabel,
  backButtonTo
}: AuthCardProps): JSX.Element => {
  return (
    <Card className="w-[500px] shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-col items-center justify-center space-y-6">
            <h1 className="text-3xl font-bold">{cardTitle}</h1>
            <p className="text-muted-foreground text-sm">{headerLabel}</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {(isSocialbutton ?? false) && (
        <React.Fragment>
          <CardContent>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-muted-foreground text-sm">
                  Or continue with
                </span>
              </div>
            </div>
          </CardContent>

          <CardContent>
            <SocialButton />
          </CardContent>
        </React.Fragment>
      )}
      <CardFooter className='flex justify-center'>
        <BackLink label={backButtonLabel} to={backButtonTo} />
      </CardFooter>
    </Card>
  )
}
