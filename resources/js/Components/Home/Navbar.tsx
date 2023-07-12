import { asset } from '@/Helper/document_file';
import { PageProps } from '@/types';
import { Link, usePage } from '@inertiajs/react'
import React from 'react'

interface Props {
  homeRef: React.RefObject<HTMLDivElement>,
  featureRef: React.RefObject<HTMLDivElement>,
  faqRef: React.RefObject<HTMLDivElement>,
  scrollTo: (ref: React.RefObject<HTMLDivElement>) => void,
}

const Navbar = ({ homeRef, featureRef, faqRef, scrollTo }: Props) => {
  const [menuOpened, setMenuOpened] = React.useState<boolean>(false);
  const page = usePage<PageProps>();

  const HamburgerMenu = () => (
    <div className={`w-full h-full bg-white p-4 shadow-lg border-t z-40 transition-all  duration-300`}>
      <div className="flex flex-col justify-around h-full gap-3">
        <div className='' onClick={() => scrollTo(homeRef)}>Home</div>
        <div className='' onClick={() => scrollTo(featureRef)}>Fitur</div>
        <div className='' onClick={() => scrollTo(faqRef)}>FAQ</div>
        <div className=''>Lainnya</div>
        <Link href={route('login')} className='font-bold text-primary'>Masuk</Link>
      </div>
    </div>
  )

  return (
    <nav className='fixed top-0 left-0 w-full h-24 bg-white shadow-sm z-50'>
      <div className="px-5 md:px-10 lg:px-20 mx-auto h-full flex flex-row justify-between items-center">
        {/* <h1 className='text-4xl font-bold font-sofia'>{"KMS."}</h1> */}
        <img src={asset('root', 'assets/logo-anset.png')} className='w-32 md:w-[8.5rem] lg:w-40' />
        <div className="hidden md:flex flex-row w-[436px] text-[18px] md:justify-center md:gap-10  lg:justify-between items-center">
          <div className='bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_1.5px] bg-no-repeat hover:bg-[length:100%_1.5px] transition-all duration-300 ease-out cursor-pointer' onClick={() => scrollTo(homeRef)}>Home</div>
          <div className='bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_1.5px] bg-no-repeat hover:bg-[length:100%_1.5px] transition-all duration-300 ease-out cursor-pointer' onClick={() => scrollTo(featureRef)}>Fitur</div>
          <div className='bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_1.5px] bg-no-repeat hover:bg-[length:100%_1.5px] transition-all duration-300 ease-out cursor-pointer' onClick={() => scrollTo(faqRef)}>FAQ</div>
          <div className='bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_1.5px] bg-no-repeat hover:bg-[length:100%_1.5px] transition-all duration-300 ease-out cursor-pointer'>Lainnya</div>
        </div>
        <Link href='/login' as='button' className="hidden md:inline-block w-[144px] h-[42px] bg-primary text-white rounded-lg text-[18px] hover:bg-opacity-90">
          {page.props.auth?.user ? 'Dashboard' : 'Masuk'}
        </Link>
        <div className="md:hidden space-y-1.5 bg-primary p-3 rounded-lg" onClick={() => setMenuOpened(prev => !prev)}>
          <div className={`border-2 border-white w-8 ${menuOpened && 'rotate-45 translate-y-2.5'} transition-all duration-300`}></div>
          <div className={`border-2 border-white w-8 ${menuOpened && 'opacity-0'} transition-all duration-300`}></div>
          <div className={`border-2 border-white w-8 ${menuOpened && '-rotate-45 -translate-y-2.5'} transition-all duration-300`}></div>
        </div>
      </div>
      <div className={`absolute w-40 h-fit  ${menuOpened ? 'right-0' : '-right-96'} transition-all duration-300`}>
        <HamburgerMenu />
      </div>
    </nav>
  )
}

export default Navbar
