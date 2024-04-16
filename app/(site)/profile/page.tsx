import { ProfileForm } from '@/components/auth/ProfileForm'
import React from 'react'

const Profile = (): React.JSX.Element => {
  return (
    <div>
      <h1 className="text-2xl">
        <ProfileForm />
      </h1>
    </div>
  )
}

export default Profile
