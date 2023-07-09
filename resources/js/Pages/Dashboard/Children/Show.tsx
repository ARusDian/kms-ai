import ImmunizationDataCard from '@/Components/Cards/ImmunizationDataCard'
import MeasurementDataCard from '@/Components/Cards/MeasurementDataCard'
import LinkButton from '@/Components/LinkButton'
import { asset } from '@/Helper/document_file'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { ChildImmunization, Children, Measurement } from '@/types'
import { Head, Link } from '@inertiajs/react'
import moment from 'moment'
import React from 'react'

interface Props {
  child: Children,
  measurement: Measurement,
  immunizations: ChildImmunization[],
}

const Show = ({ child, measurement, immunizations }: Props) => {
  console.log({
    child,
    measurement,
    immunizations
  })
  return (
    <DashboardLayout>
      <Head title='Data Anak' />
      <div className="flex flex-row justify-between items-center p-4">
        <div className="rounded-lg flex flex-row items-center gap-10 w-full">
          <div className="flex flex-col items-start justify-center">
            <div className="h-[250px] w-[250px]">
              <img src={asset('public', child.photo!.path)} alt="" className='w-full h-full object-cover rounded-full border border-primary' />
            </div>
          </div>
          <div className="flex flex-col justify-center font-sofia gap-3">
            <h1 className='text-5xl font-bold'>{child.name}</h1>
            <h1 className='text-2xl font-normal'>{child.date_of_birth}</h1>
            <h1 className='text-2xl font-normal first-letter:capitalize'>{child.gender}</h1>
            <h1 className='text-2xl font-normal'>{child.blood_type}</h1>
            <Link href='#' className="w-fit bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2 font-roboto font-bold">Hapus</Link>
          </div>
        </div>
        <div className="flex flex-row self-start gap-4">
          <LinkButton href='#' className="w-fit text-white rounded-lg px-4 py-2 font-roboto font-bold">Kembali</LinkButton>
        </div>
      </div>
      <div className="w-full border-t border-primary mt-2" />

      <div className="mx-auto flex flex-col">
        <MeasurementDataCard measurement={measurement} />

        <ImmunizationDataCard childImmunizations={immunizations} />
      </div>
    </DashboardLayout>
  )
}

export default Show