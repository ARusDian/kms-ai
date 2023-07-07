import { Link } from '@inertiajs/react'
import React from 'react'

const Footer = () => {
  return (
    <div className="h-[353px] w-full bg-primary bg-opacity-[0.08] p-20">
      <div className="flex flex-row justify-between">
        <h1 className='font-sofia font-bold text-4xl'>KMS.</h1>
        <div className="flex flex-row gap-40 font-roboto">
          <div className="flex flex-col text-end gap-5">
            <p className='font-bold'>BANTUAN</p>
            <Link href='#'>FAQ</Link>
            <Link href='#'>Kontak</Link>
            <Link href='#'>Email</Link>
          </div>
          <div className="flex flex-col text-end gap-5">
            <p className='font-bold'>FITUR</p>
            <Link href='#'>Analisis Kesehatan Anak</Link>
            <Link href='#'>Jadwal Imunisasi</Link>
            <Link href='#'>Asistensi Kesehatan</Link>
            <Link href='#'>Analisis Pertumbuhan Anak</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer