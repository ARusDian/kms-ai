import Button from '@/Components/Button'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Measurement } from '@/types'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'

interface Props {
  measurement: Measurement,
  childId: number,
}

const Edit = ({ measurement, childId }: Props) => {
  const today = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
  const form = useForm({
    weight: measurement.weight.toString(),
    height: measurement.height.toString(),
    head_circumference: measurement.head_circumference.toString(),
    date_of_measurement: measurement.date_of_measurement,
    note: measurement.note ? measurement.note.toString() : "",
    children_id: measurement.children_id.toString(),
  })

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    form.put(route('pengukuran.update', [childId, measurement.id]));
  };

  return (<DashboardLayout>
    <Head title='Edit Data Pengukuran' />

    <div className="w-full p-4 rounded-lg shadow-lg">
      <h1 className='font-sofia text-3xl font-bold'>Tambah Data Pengukuran</h1>
      <form className='flex flex-col gap-4 mt-6' onSubmit={onSubmitHandler}>
        <div className="flex flex-row justify-between gap-4 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="weight">Berat (Kg)</label>
            <input type="number" className='rounded-lg focus:ring focus:ring-primary h-11' value={form.data.weight} onChange={(e) => form.setData('weight', e.target.value)} />
            {form.errors.weight && <p className='text-sm text-red-500 font-semibold font-sofia'>{form.errors.weight}</p>}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="date_of_birth">Tinggi (cm)</label>
            <input type="number" className='rounded-lg focus:ring focus:ring-primary h-11' value={form.data.height} onChange={(e) => form.setData('height', e.target.value)} />
            {form.errors.height && <p className='text-sm text-red-500 font-semibold font-sofia'>{form.errors.height}</p>}
          </div>
        </div>

        <div className="flex flex-row justify-between gap-4 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="weight">Lingkar Kepala (cm)</label>
            <input type="number" className='rounded-lg focus:ring focus:ring-primary h-11' value={form.data.head_circumference} onChange={(e) => form.setData('head_circumference', e.target.value)} />
            {form.errors.head_circumference && <p className='text-sm text-red-500 font-semibold font-sofia'>{form.errors.head_circumference}</p>}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="date_of_birth">Tanggal Pengukuran</label>
            <input type="date" className='rounded-lg focus:ring focus:ring-primary h-11' value={form.data.date_of_measurement} onChange={(e) => form.setData('date_of_measurement', e.target.value)} max={today} />
            {form.errors.date_of_measurement && <p className='text-sm text-red-500 font-semibold font-sofia'>{form.errors.date_of_measurement}</p>}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="alergic" className='flex gap-2 items-center'>Catatan</label>
          <textarea name="alergic_desc" className='rounded-lg focus:ring focus:ring-primary h-11 resize-none placeholder:text-gray-500 placeholder:text-md' placeholder='Berikan catatan bila perlu' value={form.data.note} onChange={(e) => form.setData('note', e.target.value)}></textarea>
        </div>

        <Button type='submit' className='text-xl font-semibold'>Simpan</Button>
      </form>
    </div>
  </DashboardLayout>
  )
}

export default Edit
