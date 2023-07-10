import Button from '@/Components/Button'
import ImmunizationDataCard from '@/Components/Cards/ImmunizationDataCard'
import MeasurementDataCard from '@/Components/Cards/MeasurementDataCard'
import LinkButton from '@/Components/LinkButton'
import { asset } from '@/Helper/document_file'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { ChildImmunization, Children, Measurement } from '@/types'
import { Head, Link, useForm } from '@inertiajs/react'
import { Dialog, DialogContent } from '@mui/material'
import moment from 'moment'
import React from 'react'

interface Props {
  child: Children,
  measurement: Measurement,
  immunizations: ChildImmunization[],
}

const Show = ({ child, measurement, immunizations }: Props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const form = useForm();

  const DeleteDialog = ({ open }: { open: boolean }) => {
    return (
      <Dialog open={open} onClose={() => setOpen(prev => !prev)}>
        <DialogContent>
          <div className="flex flex-col gap-4">
            <p className='font-roboto text-2xl font-bold text-center w-96'>Apa kamu yakin ingin menghapus data anak?</p>
            <div className="flex flex-row gap-4 w-fit mx-auto">
              <Button className="w-24 bg-red-500 hover:bg-red-700 text-white rounded-lg px-4 py-2 font-roboto font-bold" onClick={onDeleteHandler}>Ya</Button>
              <Button className="w-24 bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 font-roboto font-bold" onClick={() => setOpen(prev => !prev)}>Tidak</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  const onDeleteHandler = () => {
    setOpen(prev => !prev)
    form.delete(route('data-anak.destroy', child.id));
  }

  return (
    <>
      <DeleteDialog open={open} />
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
            </div>
          </div>
          <div className="flex flex-row self-start gap-2">
            <Button className="w-fit bg-red-500 hover:bg-red-700 text-white rounded-lg px-4 py-2 font-roboto font-bold" onClick={() => setOpen(prev => !prev)}>Hapus</Button>
            <Link href='#' className="w-fit bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 font-roboto font-bold">Edit</Link>
            <LinkButton href='#' className="w-fit text-white rounded-lg px-4 py-2 font-roboto font-bold">Kembali</LinkButton>
          </div>
        </div>
        <div className="w-full border-t border-primary mt-2" />

        <div className="mx-auto flex flex-col">
          <MeasurementDataCard measurement={measurement} childId={child.id} />
          <ImmunizationDataCard childImmunizations={immunizations} childId={child.id} />
        </div>
      </DashboardLayout>
    </>
  )
}

export default Show
