import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const UserMediaCart = ({userId} : {userId:string}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* bottom */}
      <div className='flex gap-4 justify-between flex-wrap'>
        <div className="relative w-1/5 h-24">
            <Image src="https://images.pexels.com/photos/17062833/pexels-photo-17062833/free-photo-of-saint-peters-square-with-vatican-obelisk-seen-from-the-basilica.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill className='object-cover rounded-md'/>
        </div>
        <div className="relative w-1/5 h-24">
            <Image src="https://images.pexels.com/photos/17062833/pexels-photo-17062833/free-photo-of-saint-peters-square-with-vatican-obelisk-seen-from-the-basilica.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill className='object-cover rounded-md'/>
        </div>
        <div className="relative w-1/5 h-24">
            <Image src="https://images.pexels.com/photos/17062833/pexels-photo-17062833/free-photo-of-saint-peters-square-with-vatican-obelisk-seen-from-the-basilica.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill className='object-cover rounded-md'/>
        </div>
        <div className="relative w-1/5 h-24">
            <Image src="https://images.pexels.com/photos/17062833/pexels-photo-17062833/free-photo-of-saint-peters-square-with-vatican-obelisk-seen-from-the-basilica.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill className='object-cover rounded-md'/>
        </div>
        <div className="relative w-1/5 h-24">
            <Image src="https://images.pexels.com/photos/17062833/pexels-photo-17062833/free-photo-of-saint-peters-square-with-vatican-obelisk-seen-from-the-basilica.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill className='object-cover rounded-md'/>
        </div>
        <div className="relative w-1/5 h-24">
            <Image src="https://images.pexels.com/photos/17062833/pexels-photo-17062833/free-photo-of-saint-peters-square-with-vatican-obelisk-seen-from-the-basilica.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill className='object-cover rounded-md'/>
        </div>
        <div className="relative w-1/5 h-24">
            <Image src="https://images.pexels.com/photos/17062833/pexels-photo-17062833/free-photo-of-saint-peters-square-with-vatican-obelisk-seen-from-the-basilica.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill className='object-cover rounded-md'/>
        </div>
        <div className="relative w-1/5 h-24">
            <Image src="https://images.pexels.com/photos/17062833/pexels-photo-17062833/free-photo-of-saint-peters-square-with-vatican-obelisk-seen-from-the-basilica.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill className='object-cover rounded-md'/>
        </div>
      </div>
    </div>
  )
}