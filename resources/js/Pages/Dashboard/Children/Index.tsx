import ChildDataCard from '@/Components/Cards/ChildDataCard'
import LinkButton from '@/Components/LinkButton'
import { asset } from '@/Helper/document_file'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Children } from '@/types'
import { Head } from '@inertiajs/react'
import React from 'react'

interface Props {
  children: Children[]
}

const Index = ({ children }: Props) => {
  console.log(children[0])

  return (
    <DashboardLayout>
      <Head title='Data Anak' />
      <div className="flex flex-row justify-between items-center">
        <h1 className='font-sofia font-bold text-3xl'>Data Anak</h1>
        <LinkButton href={route('data-anak.create')} className='font-roboto'>Tambah Data Anak</LinkButton>
      </div>
      <div className="mt-4 w-full h-fit shadow-xl border rounded-lg p-4">
        <div className="flex flex-wrap justify-center h-fit w-full gap-4 mx-auto">
          {children.length > 0 && children.map((child) => (
            <>
              <ChildDataCard child={child} key={child.id} />
            </>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Index