import React from 'react'
import './Header.css'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <>
      <header>
        {/* logo */}
        <Link href="/" className='logo'>
          <Image 
          src="/logo.jpg" 
          alt="Rish Tech" 
          width={1}
          height={1}
          layout='responsive' />
        </Link>
        {/* nav items */}
        <nav>
          <Link className='nav-link' href="/about">About</Link>
          <Link className='nav-link' href="/service">Services</Link>
          <Link className='nav-link' href="/contact">Contact</Link>
        </nav>
        {/* button */}
        <Link href="#get-started" className="cta-button">
          Get Started
        </Link>
      </header>
    </>

  )
}

export default Header
