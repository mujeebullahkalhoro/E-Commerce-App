import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {assets} from "@/assets/assets"
function NavBar() {
  return (
    <nav className='flex justify-between items-center px-6 md:px-16 py-1 lg:px-32 border-b border-gray-300 text-gray-700'>

        <Image src={assets.logo} alt='logo' className='cursor-pointer w-28 md:w-32 '/>

        <div className='flex gap-4  items-center lg:gap-8 max-md:hidden'>
            <Link href='/'>Home</Link>
            <Link href="/all-products">Shop</Link>
            <Link href="/">About US</Link>
            <Link href="/">Contact</Link>
            
              
        </div>

        <ul className=' flex justify-center items-center gap-4'>
            <Image className='w-4 h-4' src={assets.search_icon} alt='search-icon'/> 
            <button className='flex items-center gap-2 hover:text-gray-900 transition hover:cursor-pointer'>
                <Image src={assets.user_icon} alt='user-icon' />
                Account 

            </button>
            
        </ul>



    </nav>
  )
}

export default NavBar
