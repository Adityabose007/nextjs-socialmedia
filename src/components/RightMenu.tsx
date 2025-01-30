
import React from 'react'
import { FriendsRequest } from './FriendsRequest'
import { Birthdays } from './Birthdays'
import { Ads } from './Ads'
import { UserInformationCard } from './UserInformationCard'
import { UserMediaCart } from './UserMediaCart'

export const RightMenu = ({userId}:{userId?:string}) => {
  return (
    <div className='flex flex-col gap-6'>
      {userId ? (
        <>
          <UserInformationCard userId={userId}/>
          <UserMediaCart userId={userId}/>
        </>
      ) : null}
      <FriendsRequest/>
      <Birthdays/>
      <Ads size="md"/>
    </div>
  )
}
