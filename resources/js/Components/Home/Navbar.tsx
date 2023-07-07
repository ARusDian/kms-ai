import { Link } from '@inertiajs/react'
import React from 'react'

const Navbar = () => {
  const [menuOpened, setMenuOpened] = React.useState<boolean>(false);

  const HamburgerMenu = () => (
    <div className={`w-full h-full bg-white p-4 shadow-lg border-t z-40 transition-all  duration-300`}>
      <div className="">
        <div className="flex flex-col justify-around h-full gap-3">
          <Link href='#' className=''>Home</Link>
          <Link href='#' className=''>Fitur</Link>
          <Link href='#' className=''>FAQ</Link>
          <Link href='#' className=''>Lainnya</Link>
        </div>
      </div>
    </div>
  )

  return (
    <nav className='fixed top-0 left-0 w-full h-24 bg-white shadow-sm z-50'>
      <div className="px-5 md:px-20 mx-auto h-full flex flex-row justify-between items-center">
        <h1 className='text-4xl font-bold font-sofia'>{"KMS."}</h1>
        <div className="hidden md:flex flex-row w-[436px] text-[18px] justify-between ">
          <Link href='#' className='bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_1.5px] bg-no-repeat hover:bg-[length:100%_1.5px] transition-all duration-300 ease-out'>Home</Link>
          <Link href='#' className='bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_1.5px] bg-no-repeat hover:bg-[length:100%_1.5px] transition-all duration-300 ease-out'>Fitur</Link>
          <Link href='#' className='bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_1.5px] bg-no-repeat hover:bg-[length:100%_1.5px] transition-all duration-300 ease-out'>FAQ</Link>
          <Link href='#' className='bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_1.5px] bg-no-repeat hover:bg-[length:100%_1.5px] transition-all duration-300 ease-out'>Lainnya</Link>
        </div>
        <Link href='#' as='button' className="hidden md:inline-block w-[144px] h-[42px] bg-primary text-white rounded-lg text-[18px] hover:bg-opacity-90">
          Masuk
        </Link>
        <div className="md:hidden space-y-1.5 bg-primary p-3 rounded-lg" onClick={() => setMenuOpened(prev => !prev)}>
          <div className={`border-2 border-white w-8 ${menuOpened && 'rotate-45 translate-y-2.5'} transition-all duration-300`}></div>
          <div className={`border-2 border-white w-8 ${menuOpened && 'opacity-0'} transition-all duration-300`}></div>
          <div className={`border-2 border-white w-8 ${menuOpened && '-rotate-45 -translate-y-2.5'} transition-all duration-300`}></div>
        </div>
      </div> 
      <div className={`absolute w-40 h-40  ${menuOpened ? 'right-0' : '-right-96'} transition-all duration-300`}>
        <HamburgerMenu />
      </div>
    </nav>
  )
}

export default Navbar