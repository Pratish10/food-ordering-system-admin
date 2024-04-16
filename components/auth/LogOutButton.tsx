import { logout } from '@/actions/user/logout'

export const LogOutButton = ({
  children
}: {
  children: React.ReactNode
}): JSX.Element => {
  const onClick = (): void => {
    void logout()
  }
  return <span onClick={onClick}>{children}</span>
}
