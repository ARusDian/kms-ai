import Button from '@/Components/Button'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { ChildImmunization } from '@/types'
import { Head, Link, useForm } from '@inertiajs/react'
import React from 'react'

interface Props {
  childImmunization: ChildImmunization
}

const Show = ({ childImmunization }: Props) => {
  const form = useForm({
    date_of_immunization: childImmunization.date_of_immunization,
    status: childImmunization.status,
    note: childImmunization.note ?? "",
  });

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.data.status === "belum") {
      form.data.note = "";
      form.data.date_of_immunization = "";
    }
    form.put(route('imunisasi.update', [childImmunization.children_id, childImmunization.id]));
  }

  return (
    <DashboardLayout>
      <Head title='Edit Data Imunisasi' />      
      <div className="w-full rounded-lg shadow-lg p-4 text-lg font-semibold">
        <div className="flex flex-row justify-between">
          <h1 className='font-bold font-sofia text-3xl text-primary'>Data Imunisasi - {childImmunization.immunization.name}</h1>
          <Link href={route('imunisasi.index', [childImmunization.children_id, childImmunization.id])} className='w-fit font-sofia text-white bg-primary px-4 py-2 rounded-lg text-xl justify-self-end'>Kembali</Link>
        </div>
        <div className="flex flex-col gap-4 mt-2">
          <div className="flex flex-row gap-4 w-full">
            <div className="flex flex-col w-full gap-2">
              <p>Tipe :</p>
              <div className="w-full border border-primary px-4 py-2 rounded-lg">
                <p className="font-normal capitalize">{childImmunization.immunization.type}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <p>Prevensi :</p>
            <div className="w-full border border-primary px-4 py-2 rounded-lg">
              <p className="font-normal capitalize">{childImmunization.immunization.prevention}</p>
            </div>
          </div>

          <div className="flex flex-row gap-4 w-full h-44">
            <div className="flex flex-col w-full h-full gap-2">
              <p>Indikasi :</p>
              <div className="w-full h-full border border-primary overflow-auto px-4 py-2 rounded-lg">
                <p className="font-normal first-letter:capitalize">{childImmunization.immunization.indication} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi autem at atque omnis nostrum nemo quisquam porro libero tenetur. Pariatur.</p>
              </div>
            </div>
            <div className="flex flex-col w-full h-full gap-2">
              <p>Kontraindikasi :</p>
              <div className="w-full h-full border border-primary overflow-auto px-4 py-2 rounded-lg">
                <p className="font-normal capitalize">{childImmunization.immunization.contraindication}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-4 w-full h-32">
            <div className="flex flex-col w-full h-full gap-2">
              <p>Imunisasi Kejar :</p>
              <div className="w-full h-full border border-primary overflow-auto px-4 py-2 rounded-lg">
                <p className="font-normal first-letter:capitalize">{childImmunization.immunization.chase_immunization}</p>
              </div>
            </div>
            <div className="flex flex-col w-full h-full gap-2">
              <p>Efek Samping :</p>
              <div className="w-full h-full border border-primary px-4 py-2 rounded-lg">
                <p className="font-normal capitalize">{childImmunization.immunization.KIPI}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full h-full gap-2">
            <p>Instruksi Kerja :</p>
            <div className="w-full h-full border border-primary px-4 py-2 rounded-lg">
              <p className="font-normal first-letter:capitalize">{childImmunization.immunization.schedule}</p>
            </div>
          </div>
        </div>

        <h1 className='font-bold font-sofia text-3xl text-primary mt-8'>Data Pelaksanaan</h1>
        <form className="flex flex-col gap-4 mt-2" onSubmit={onSubmitHandler}>
          <div className="flex flex-row gap-4">
            <div className="w-full flex flex-col gap-2">
              <p>Tanggal Rekomendasi</p>
              <input type="date" readOnly className='border border-primary px-4 py-2 rounded-lg' value={childImmunization.recommended_date} />
            </div>
            <div className="w-full flex flex-col gap-2">
              <p>Status</p>
              <select className="border border-primary px-4 py-2 rounded-lg" value={form.data.status} onChange={(e) => form.setData('status', e.target.value)}>
                <option value="belum">Belum</option>
                <option value="sudah">Sudah</option>
              </select>
            </div>
            <div className="w-full flex flex-col gap-2">
              <p>Tanggal Pelaksanaan</p>
              <input type="date" className='border border-primary px-4 py-2 rounded-lg' required
                value={form.data.date_of_immunization} onChange={(e) => form.setData('date_of_immunization', e.target.value)} />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <p>Catatan</p>
            <input type="text" className='border border-primary px-4 py-2 rounded-lg' placeholder='Berikan catatan bila perlu...' value={form.data.note} onChange={(e) => form.setData('note', e.target.value)} />
          </div>
          <Button className='w-full' type='submit'>Simpan</Button>
        </form>
      </div>
    </DashboardLayout>
  )
}

export default Show