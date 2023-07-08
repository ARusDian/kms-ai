import LinkButton from '@/Components/LinkButton'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const Index = () => {
  return (
    <DashboardLayout>
      <Head title='Data Anak'/>
      <div className="flex flex-row justify-between items-center">
        <h1 className='font-sofia font-bold text-3xl'>Data Anakku</h1>
        <LinkButton href={route('data-anak.create')} className='font-roboto'>Tambah Data Anak</LinkButton>
      </div>
      <div className="mt-4">
        test
      </div>
    </DashboardLayout>
  )
}

export default Index