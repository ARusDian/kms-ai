import { Link } from '@inertiajs/react'
import React from 'react'

const Footer = () => {
  return (
    <div className="h-[540px] md:h-[353px] w-full bg-primary bg-opacity-[0.08] p-4 py-8 md:p-20">
      <div className="flex flex-col md:flex-row justify-between gap-4 h-full">
        <h1 className='font-sofia font-bold text-4xl text-center md:text-start'>Anset</h1>
        <div className="flex flex-grow flex-col justify-around md:justify-end md:flex-row md:gap-40 font-roboto">
          <div className="flex flex-col md:text-end gap-5">
            <p className='font-bold'>BANTUAN</p>
            <Link href='#' className='text-[#666666] text-opacity-90'>FAQ</Link>
            <Link href='#' className='text-[#666666] text-opacity-90'>Kontak</Link>
            <Link href='#' className='text-[#666666] text-opacity-90'>Email</Link>
          </div>
          <div className="flex flex-col md:text-end gap-5">
            <p className='font-bold'>FITUR</p>
            <Link href='#' className='text-[#666666] text-opacity-90'>Analisis Kesehatan Anak</Link>
            <Link href='#' className='text-[#666666] text-opacity-90'>Jadwal Imunisasi</Link>
            <Link href='#' className='text-[#666666] text-opacity-90'>Asistensi Kesehatan</Link>
            <Link href='#' className='text-[#666666] text-opacity-90'>Analisis Pertumbuhan Anak</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer