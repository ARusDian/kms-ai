import Button from '@/Components/Button';
import InputText from '@/Components/InputText';
import DashboardLayout from '@/Layouts/DashboardLayout'
import { PageProps } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react'
import React from 'react'

const Create = () => {
  const page = usePage<PageProps>();
  const form = useForm({
    name: "",
    date_of_birth: "",
    gender: "laki-laki",
    is_alergic: false,
    alergic_desc: "",
    photo: null,
    blood_type: "A-",
    weight: "0",
    height: "0",
    head_circumference: "0",
    note: "",
    date_of_measurement: "",
    user_id: page.props.auth.user.id
  });

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form.data);
    form.post(route('data-anak.store'));
  }
  
  console.log(form.errors);

  return (
    <DashboardLayout>
      <Head title='Data Anak' />
      <div className="w-full shadow-lg mt-2 rounded-lg p-4">
        <form className='font-roboto font-normal text-lg w-full flex flex-col gap-10' onSubmit={onSubmitHandler}>
          <div className="flex flex-col gap-6">
            <h2 className='text-3xl font-bold font-sofia'>Data Umum</h2>
            <div className="flex flex-row justify-between gap-4 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name">Nama</label>
                <input type="text" className='rounded-lg focus:ring focus:ring-primary h-11' value={form.data.name} onChange={(e) => form.setData('name', e.target.value)} required />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="date_of_birth">Tanggal Lahir</label>
                <input type="date" className='rounded-lg focus:ring focus:ring-primary h-11' value={form.data.date_of_birth} onChange={(e) => form.setData('date_of_birth', e.target.value)} required />
              </div>
            </div>

            <div className="flex flex-row justify-between gap-4 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="gender">Jenis Kelamin</label>
                <select name="gender" id="gender" className='rounded-lg focus:ring focus:ring-primary h-11' value={form.data.gender} onChange={(e) => form.setData('gender', e.target.value)} required>
                  <option value="laki-laki">Laki-Laki</option>
                  <option value="perempuan">Perempuan</option>
                </select>
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
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="alergic" className='flex gap-2 items-center'>
                Alergi
                <input type="checkbox" className='checked:bg-primary focus:ring-0  focus:bg-primary active:bg-primary' onChange={(e) => form.setData('is_alergic', !form.data.is_alergic)} />
              </label>
              <textarea name="alergic_desc" className='rounded-lg focus:ring focus:ring-primary h-11 resize-none placeholder:text-gray-500 placeholder:text-md disabled:cursor-not-allowed' disabled={!form.data.is_alergic} required={form.data.is_alergic} placeholder='Jelaskan alergi yang diderita...' value={form.data.alergic_desc} onChange={(e) => form.setData('alergic_desc', e.target.value)}></textarea>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="photo" className='flex gap-2 items-center'>
                Foto Anak
              </label>
              <input type="file" className='border border-black rounded-lg file:p-2 file:mr-4 file:rounded-l-lg file:border-none file:bg-primary file:text-white' onChange={(e) => {
                //@ts-ignore
                form.setData('photo', e.target.files![0])
              }} />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className='text-3xl font-bold font-sofia'>Pengukuran</h2>
            <div className="flex flex-row justify-between gap-4 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="weight">Berat (Kg)</label>
                <input type="number" className='rounded-lg focus:ring focus:ring-primary h-11' value={form.data.weight} onChange={(e) => form.setData('weight', e.target.value)} />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="date_of_birth">Tinggi (cm)</label>
                <input type="number" className='rounded-lg focus:ring focus:ring-primary h-11' value={form.data.height} onChange={(e) => form.setData('height', e.target.value)} />
              </div>
            </div>

            <div className="flex flex-row justify-between gap-4 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="weight">Lingkar Kepala (cm)</label>
                <input type="number" className='rounded-lg focus:ring focus:ring-primary h-11' value={form.data.head_circumference} onChange={(e) => form.setData('head_circumference', e.target.value)} />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="date_of_birth">Tanggal Pengukuran</label>
                <input type="date" className='rounded-lg focus:ring focus:ring-primary h-11' value={form.data.date_of_measurement} onChange={(e) => form.setData('date_of_measurement', e.target.value)} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="alergic" className='flex gap-2 items-center'>Catatan</label>
              <textarea name="alergic_desc" className='rounded-lg focus:ring focus:ring-primary h-11 resize-none placeholder:text-gray-500 placeholder:text-md' placeholder='Berikan catatan bila perlu' value={form.data.note} onChange={(e) => form.setData('note', e.target.value)}></textarea>
            </div>
          </div>
          <Button type='submit' className='bg-secondary text-black font-semibold'>Simpan</Button>
        </form>
      </div>
    </DashboardLayout>
  )
}

export default Create