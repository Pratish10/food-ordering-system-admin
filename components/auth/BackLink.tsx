import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface BackButtonProps {
  label: string
  to: string
}

export const BackLink = ({ label, to }: BackButtonProps): JSX.Element => {
  return (
    <Button variant="link" className="font-normal hover:text-orange-500" size="sm" asChild>
      <Link href={to}>{label}</Link>
    </Button>
  )
}
