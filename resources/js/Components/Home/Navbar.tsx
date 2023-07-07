import { Link } from '@inertiajs/react'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full h-24 bg-white shadow-sm z-50'>
      <div className="px-20 mx-auto h-full flex flex-row justify-between items-center">
        <h1 className='text-4xl font-bold font-sofia'>{"KMS."}</h1>
        <div className="flex flex-row w-[436px] text-[18px] justify-between ">
          <Link href='#' className='bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_1.5px] bg-no-repeat hover:bg-[length:100%_1.5px] transition-all duration-300 ease-out'>Home</Link>
          <Link href='#' className='bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_1.5px] bg-no-repeat hover:bg-[length:100%_1.5px] transition-all duration-300 ease-out'>Fitur</Link>
          <Link href='#' className='bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_1.5px] bg-no-repeat hover:bg-[length:100%_1.5px] transition-all duration-300 ease-out'>FAQ</Link>
          <Link href='#' className='bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_1.5px] bg-no-repeat hover:bg-[length:100%_1.5px] transition-all duration-300 ease-out'>Lainnya</Link>
        </div>
        <Link href='#' as='button' className="w-[144px] h-[42px] bg-primary text-white rounded-lg text-[18px] hover:bg-opacity-90">
          Masuk
        </Link>
      </div>
    </nav>
  )
}

export default Navbar