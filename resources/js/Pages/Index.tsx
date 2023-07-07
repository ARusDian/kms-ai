import Footer from '@/Components/Home/Footer'
import Navbar from '@/Components/Home/Navbar'
import { Link } from '@inertiajs/react'
import React from 'react'

const Index = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-24 w-full h-[815px] shadow-md">
        <div className="px-20 flex flex-row h-full w-full justify-between gap-20 max-w-screen-2xl mx-auto">
          <div className="flex flex-col justify-center h-full">
            <h1 className='text-primary font-sofia text-6xl w-[652px] font-bold'>
              Peduli Anak-anak, Peduli Indonesia: <span className='text-secondary'>Tingkatkan</span> Kesehatan Mereka!
            </h1>
            <div className="w-[565px] text-[18px] font-roboto font-normal">
              <p>Mari kita tingkatkan kesehatan anak-anak Indonesia. Mereka adalah masa depan negara kita. Mari peduli pada kesehatan mereka dan berikan perhatian yang mereka butuhkan. Bersama-sama, kita bisa menciptakan Indonesia yang lebih kuat dan lebih baik bagi generasi mendatang.</p>
            </div>
            <div className="mt-9 flex flex-row gap-4">
              <Link href='#' as='button' className='w-[267px] text-[22px] bg-primary text-white rounded-lg h-[52.3px] shadow-xl'>Gabung Sekarang!</Link>
              <Link href='#' as='button' className='w-[267px] text-[22px] h-[52.3px] border border-primary rounded-lg text-primary'>Pelajari</Link>
            </div>
          </div>
          <div className="w-[620px] h-[579px] my-auto">
            <img src={'/home/banner.png'} className='w-full h-full' />
          </div>
        </div>
      </div>

      <div className="w-full h-[815px] bg-[rgba(81,179,170,0.08)]">
        <div className="h-full flex flex-col justify-center items-center gap-14  mx-auto">
          <h1 className='w-[894px] text-primary text-6xl font-sofia leading-tight text-center'>Optimalkan Kesehatan Anak-anak, Temukan <span className='h-[58px] bg-[#D3DE32] text-white w-[374px] px-1'>Fitur Unggulan</span> Kami!</h1>
          <div className="h-[455px] w-full max-w-screen-2xl flex flex-row justify-around gap-10 font-sofia text-[32px]">
            <div className="h-full w-[373px] rounded-3xl bg-[linear-gradient(to_right_bottom,rgba(211,222,50,0.38),rgba(211,222,50,0.38)),url('home/pengingat-imunisasi.png')] bg-no-repeat bg-cover flex flex-col justify-end p-4 text-white">
              <p className='drop-shadow-xl'>Pengingat <br /> Penjadwalan Imunisasi</p>
            </div>
            <div className="h-full w-[373px] rounded-3xl bg-[linear-gradient(to_right_bottom,rgba(211,222,50,0.38),rgba(211,222,50,0.38)),url('home/asistensi-kesehatan.png')] bg-no-repeat bg-cover flex flex-col justify-end p-4 text-white">
              <p className='drop-shadow-xl'>Asistensi Kesehatan Anak dan Bayi</p>
            </div>
            <div className="h-full w-[373px] rounded-3xl bg-[linear-gradient(to_right_bottom,rgba(211,222,50,0.38),rgba(211,222,50,0.38)),url('home/analisis-pertumbuhan.png')] bg-no-repeat bg-cover flex flex-col justify-end p-4 text-white">
              <p className='drop-shadow-xl'>Analisis Pertumbuhan Anak dan Bayi</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[815px] p-20 flex justify-between gap-20 max-w-screen-2xl mx-auto">
        <div className='bg-[url("home/faq-image-sec.png")] w-[552px] h-[652px] bg-no-repeat bg-contain'></div>
        <div className="flex-grow h-full flex flex-col justify-center items-end">
          <h1 className='w-[660px] font-sofia font-bold text-end text-[59px] text-secondary'>Monitoring Kesehatan Anak-anak Lebih Mudah dengan Aplikasi Ini!</h1>
          <p className='mt-7 font-roboto text-end text-3xl w-[678px] text-[rgba(102,102,102,0.56)]'>Tingkatkan kesehatan anak-anak Indonesia. Mereka adalah masa depan kita. Peduli dan perhatikan kesehatan mereka. Bersama, ciptakan Indonesia lebih kuat. Jelajahi FAQ kami sekarang!</p>
          <Link href='#' as='button' className='w-[252px] mt-14 text-[22px] h-[57px] bg-primary rounded-lg text-white'>Pelajari</Link>
        </div>
      </div>

      <div className="relative w-full h-[815px] bg-primary bg-opacity-[0.08]">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className='text-secondary font-sofia text-6xl w-[894px] text-center'>Temukan Tanggal Imunisasi yang <span className='text-primary'>Tepat</span> untuk Buah Hati Anda!</h1>
          <div className='h-[507px] w-[1269px] bg-white rounded-3xl mt-8 drop-shadow-lg p-4 flex flex-col justify-center items-center'>
            <div className='flex flex-row justify-around gap-4 font-sofia w-full'>
              <div className="flex flex-col gap-2">
                <label htmlFor="gender" className='text-primary text-3xl'>Jenis Kelamin</label>
                <select name="gender" id="gender" className='w-[375px] h-14 text-xl border-[#D6D6D6] rounded-2xl shadow-sm'>
                  <option value="laki-laki" selected>Perempuan</option>
                  <option value="laki-laki">Laki-Laki</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="birthdate" className='text-primary text-3xl'>Tanggal Lahir</label>
                <input type="date" name="birthdate" id="birthdate" className='w-[375px] h-14 text-xl border-[#D6D6D6] rounded-2xl shadow-sm' />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="gender" className='text-primary text-3xl opacity-0'>.</label>
                <button className='w-[229px] h-14 bg-primary text-white rounded-2xl text-lg'>Cari</button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -z-10 w-full h-[379px] bg-primary bottom-0 left-0 rounded-t-[100px]"></div>
      </div>

      <div className="w-full h-[815px]">
        <div className="flex h-full justify-center items-center gap-5 max-w-screen-2xl mx-auto">
          <div className="w-[666px] h-[742px] bg-primary flex flex-col justify-center items-center gap-6">
            <h1 className='w-[502px] text-6xl font-sofia text-white font-bold'>Mari, Dukung Tumbuh Kembang Anak Demi Masa Depan yang Lebih Baik</h1>
            <div className="flex flex-row gap-6">
              <Link href='#' className='w-[267px] h-[52.3px] bg-[#378079] rounded-lg text-white text-[22px] font-roboto' as='button'>Gabung Sekarang!</Link>
              <Link href='#' className='w-[211px] h-[52.3px] border border-white rounded-lg text-white text-[22px] font-roboto' as='button'>Hubungi Kami</Link>
            </div>
          </div>
          <div className="w-[666px] h-[742px] bg-[url('home/anaksd.jpeg')] bg-no-repeat"></div>
        </div>
      </div>

      <Footer/>

    </div>
  )
}

export default Index