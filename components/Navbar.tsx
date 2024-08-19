import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href='/' className='flex items-center gap-1'>
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt='CISPOL LOGO'
          className='max-sm:size-10'
        />
        <p className='text-[14] font-extrabold text-white max-sm:hidden'>CISPOL</p>
      </Link>
      <div className='felx-between gap-5'>
      <SignedIn>
              <UserButton />
            </SignedIn>
        <MobileNav/>

      </div>
    </nav>

  )
}

export default Navbar