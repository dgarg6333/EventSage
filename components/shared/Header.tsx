import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignedOut , SignedIn, UserButton} from '@clerk/nextjs'
import { Button } from '../ui/button'
import MobileNav from './MobileNav'
import NavItems from './NavItems'

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex items-center justify-between'>
      <Link href="/" className="w-36 flex flex-row">
          <Image 
            src="/assets/images/logo.png" width={50} height={16}
            alt="Evently logo" 
            className='pl-2'
          />
          <div className='text-2xl font-semibold pt-1'>EventSage</div>
        </Link>
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
        <div className='flex w-32 justify-end gap-3 pr-2'>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav/>
          </SignedIn>
          <SignedOut>
            <Button asChild className='rounded-full' size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>

        </div>
      </div>
    </header>
  )
}

export default Header