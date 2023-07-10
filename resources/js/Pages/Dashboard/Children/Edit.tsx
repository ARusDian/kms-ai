import Button from '@/Components/Button'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Children } from '@/types'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'

interface Props {
  child: Children
}

const Edit = ({ child }: Props) => {
  const today = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
  const form = useForm({
    name: child.name,
    date_of_birth: child.date_of_birth,
    gender: child.gender,
    is_alergic: child.is_alergic,
    alergic_desc: child.alergic_desc,
    photo: null,
    blood_type: child.blood_type,
  });

  React.useEffect(() => {
    if (!form.data.is_alergic) {
      form.setData('alergic_desc', "");
    }
  }, [form.data.is_alergic])

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    //@ts-ignore
    form.data._method = "PUT";
    form.post(route('data-anak.update', child.id));
  }

  return (
    <DashboardLayout>
      <Head title='Edit Data Anak' />
      <div className="shadow-lg mt-2 rounded-lg p-4">
        <form onSubmit={onSubmitHandler} className="flex flex-col gap-6">
          <h2 className='text-3xl font-bold font-sofia'>Data Anak</h2>
          <div className="flex flex-row justify-between gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name">Nama</label>
              <input type="text" className='rounded-lg focus:ring focus:ring-primary h-11' value={form.data.name} onChange={(e) => form.setData('name', e.target.value)} required />
              {form.errors.name && <p className='text-sm text-red-500 font-semibold font-sofia'>{form.errors.name}</p>}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="date_of_birth">Tanggal Lahir</label>
              <input type="date" className='rounded-lg focus:ring focus:ring-primary h-11' value={form.data.date_of_birth} onChange={(e) => form.setData('date_of_birth', e.target.value)} required max={today} />
              {form.errors.date_of_birth && <p className='text-sm text-red-500 font-semibold font-sofia'>{form.errors.date_of_birth}</p>}
            </div>
          </div>

          <div className="flex flex-row justify-between gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="gender">Jenis Kelamin</label>
              <select name="gender" id="gender" className='rounded-lg focus:ring focus:ring-primary h-11' value={form.data.gender} onChange={(e) => form.setData('gender', e.target.value)} required>
                <option value="laki-laki">Laki-Laki</option>
                <option value="perempuan">Perempuan</option>
              </select>
              {form.errors.gender && <p className='text-sm text-red-500 font-semibold font-sofia'>{form.errors.gender}</p>}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="gender">Golongan Darah</label>
              <select name="gender" id="gender" className='rounded-lg focus:ring focus:ring-primary h-11' value={form.data.blood_type} onChange={(e) => form.setData('blood_type', e.target.value)} required>
                <option value="A-">A-</option>
                <option value="B-">B-</option>
                <option value="C-">AB-</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="C+">AB+</option>
                <option value="O+">O+</option>
              </select>
              {form.errors.blood_type && <p className='text-sm text-red-500 font-semibold font-sofia'>{form.errors.blood_type}</p>}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="alergic" className='flex gap-2 items-center'>
              Alergi
              <input type="checkbox" className='checked:bg-primary focus:ring-0  focus:bg-primary active:bg-primary' checked={form.data.is_alergic} onChange={() =>
                form.setData('is_alergic', !form.data.is_alergic)} />
            </label>
            <textarea name="alergic_desc" className='rounded-lg focus:ring focus:ring-primary h-11 resize-none placeholder:text-gray-500 placeholder:text-md disabled:cursor-not-allowed' disabled={!form.data.is_alergic} required={form.data.is_alergic} placeholder='Jelaskan alergi yang diderita...' value={form.data.alergic_desc} onChange={(e) => form.setData('alergic_desc', e.target.value)}></textarea>
            {form.errors.alergic_desc && <p className='text-sm text-red-500 font-semibold font-sofia'>{form.errors.alergic_desc}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="photo" className='flex gap-2 items-center'>
              Foto Anak
            </label>
            <input type="file" className='border border-black rounded-lg file:p-2 file:mr-4 file:rounded-l-lg file:border-none file:bg-primary file:text-white' onChange={(e) => {
              //@ts-ignore
              form.setData('photo', e.target.files![0])
            }} />
            {form.errors.photo && <p className='text-sm text-red-500 font-semibold font-sofia'>{form.errors.photo}</p>}
          </div>
          <Button type='submit'>Simpan</Button>
        </form>
      </div>
    </DashboardLayout>
  )
}

export default Edit