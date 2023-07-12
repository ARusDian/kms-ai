import ChildDataCard from '@/Components/Cards/ChildDataCard'
import LinkButton from '@/Components/LinkButton'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Children } from '@/types'
import { Head } from '@inertiajs/react'
import React from 'react'

interface Props {
  children: Children[]
}

const Index = ({ children }: Props) => {
  return (
    <DashboardLayout>
      <Head title='Data Anak' />
      <div className="flex flex-row justify-between items-center">
        <h1 className='font-sofia font-bold text-3xl'>Data Anak</h1>
        <LinkButton href={route('data-anak.create')} className='font-roboto'>Tambah Data Anak</LinkButton>
      </div>
      <div className="mt-4 w-full h-fit p-4">
        <div className="flex flex-wrap justify-around h-fit w-full gap-4 gap mx-auto">
          {children.length > 0 && children.map((child) => <ChildDataCard key={child.id} child={child}/>)}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Index