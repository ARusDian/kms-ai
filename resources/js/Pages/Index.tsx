import Footer from '@/Components/Home/Footer'
import Navbar from '@/Components/Home/Navbar'
import { Head, Link, useForm } from '@inertiajs/react'
import React, { useState } from 'react'
import AOS from "aos";
import 'aos/dist/aos.css';
import moment from 'moment';
import axios from 'axios';
import { Immunization } from '@/types';

interface GuestImmunization extends Immunization {
  immunization_date: string,
}

const Index = () => {
  const homeRef = React.useRef<HTMLDivElement>(null);
  const featureRef = React.useRef<HTMLDivElement>(null);
  const faqRef = React.useRef<HTMLDivElement>(null);

  const scrollToHandler = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      scrollTo({
        top: ref.current?.offsetTop - 100,
        left: 0,
        behavior: 'smooth'
      })
    }
  }

  const [childForm, setChildForm] = useState({
    gender: "perempuan",
    date_of_birth: moment(Date.now()).format('YYYY-MM-DD')
  });
  const dayDiff: number = Math.abs(moment(moment(Date.now())).diff(childForm.date_of_birth, 'days'));
  const [immunizations, setImmunization] = useState<GuestImmunization[]>([]);

  const searchImmunizationHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      dayDiff
    }
    axios.post(route('guest.immunization.get'), formData)
      .then(res => {
        const data = res.data.immunizations;
        const calculatedData: GuestImmunization[] = data.map((immunization: Immunization) => {
          return {
            ...immunization,
            immunization_date: moment(childForm.date_of_birth).add(parseInt(immunization.recommended_days), 'days').format('DD/MM/YYYY')
          }
        });

        setImmunization(calculatedData);
      }).catch(err => console.log(err));
  }

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Head title='Home' />
      <Navbar homeRef={homeRef} featureRef={featureRef} faqRef={faqRef} scrollTo={scrollToHandler} />

      <div className="mt-24 w-full h-[1063px] md:h-[498px] lg:h-[815px] shadow-md mx-auto" ref={homeRef}>
        <div className="p-5 md:p-10 lg:px-20 flex flex-col md:flex-row h-full w-full justify-center md:justify-between gap-5 lg:gap-20 lg:max-w-screen-2xl mx-auto" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-offset="100">
          <div className="flex flex-col justify-center items-center md:items-start h-fit md:h-full">
            <h1 className='text-primary font-sofia text-center md:text-start text-[34px] md:text-[36px] lg:text-[34px] w-[347px] md:w-[374px] lg:w-[652px] font-bold'>
              Peduli Anak-anak, Peduli Indonesia: <span className='text-secondary'>Tingkatkan</span> Kesehatan Mereka!
            </h1>
            <div className="mt-6 md:mt-0 w-[347px] text-center md:text-start md:w-[356px] lg:w-[565px] text-[16px] md:text-[14px] lg:text-[18px] font-roboto font-normal text-[#666666] text-opacity-60">
              <p>Mari kita tingkatkan kesehatan anak-anak Indonesia. Mereka adalah masa depan negara kita. Mari peduli pada kesehatan mereka dan berikan perhatian yang mereka butuhkan. Bersama-sama, kita bisa menciptakan Indonesia yang lebih kuat dan lebih baik bagi generasi mendatang.</p>
            </div>
            <div className="md:hidden mt-9">
              <img src={'/home/banner.png'} className='w-full h-full' />
            </div>
            <div className="mt-9 md:mt-2 flex flex-col md:flex-row gap-4 w-full">
              <Link href='#' as='button' className='w-full md:w-[176px] lg:w-[267px] lg:text-[22px] text-[16px] bg-primary text-white rounded-lg md:h-[38px] h-10 lg:h-[52.3px] shadow-xl'>Gabung Sekarang!</Link>
              <Link href='#' as='button' className='w-full md:w-[167px] lg:w-[267px] lg:text-[22px] text-[16px] lg:h-[52.3px] md:h-[38px] h-10 border border-primary rounded-lg text-primary'>Pelajari</Link>
            </div>
          </div>
          <div className="hidden md:block lg:w-[620px] lg:h-[579px] md:my-auto">
            <img src={'/home/banner.png'} className='w-full h-full' />
          </div>
        </div>
      </div>

      <div className="w-full h-[1592px] md:h-[1201px] lg:h-[815px] bg-[rgba(81,179,170,0.08)]" ref={featureRef}>
        <div className="h-full flex flex-col justify-center items-center gap-14 mx-auto px-4 md:px-0">
          <h1 className='md:w-[754px] lg:w-[894px] text-primary text-[34px] md:text-[36px] lg:text-6xl font-sofia leading-tight text-center' data-aos="fade-right" data-aos-easing="ease-in-out">Optimalkan Kesehatan Anak-anak, Temukan <span className='h-[58px] bg-[#D3DE32] text-white w-[374px] px-1'>Fitur Unggulan</span> Kami!</h1>
          <div className="h-fit lg:h-[455px] w-full max-w-screen-2xl flex flex-col md:flex-row md:flex-wrap md:justify-center lg:justify-around gap-4 lg:gap-10 font-sofia text-[32px]">
            <div className="h-[415px] w-full md:w-[373px] rounded-3xl bg-[linear-gradient(to_right_bottom,rgba(211,222,50,0.38),rgba(211,222,50,0.38)),url('home/pengingat-imunisasi.png')] bg-no-repeat bg-cover flex flex-col justify-end p-4 text-white" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-offset="150">
              <p className='drop-shadow-xl'>Pengingat <br /> Penjadwalan Imunisasi</p>
            </div>
            <div className="h-[415px] w-full md:w-[373px] rounded-3xl bg-[linear-gradient(to_right_bottom,rgba(211,222,50,0.38),rgba(211,222,50,0.38)),url('home/asistensi-kesehatan.png')] bg-no-repeat bg-cover flex flex-col justify-end p-4 text-white" data-aos="fade-up" data-aos-easing="ease-in-out">
              <p className='drop-shadow-xl'>Asistensi Kesehatan Anak dan Bayi</p>
            </div>
            <div className="h-[415px] w-full md:w-[373px] rounded-3xl bg-[linear-gradient(to_right_bottom,rgba(211,222,50,0.38),rgba(211,222,50,0.38)),url('home/analisis-pertumbuhan.png')] bg-no-repeat bg-cover flex flex-col justify-end p-4 text-white" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-offset="150">
              <p className='drop-shadow-xl'>Analisis Pertumbuhan Anak dan Bayi</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[1121px] md:h-[586px] lg:h-[815px] px-5 md:p-8 lg:p-20 flex flex-col md:flex-row justify-center md:justify-between lg:gap-20 max-w-screen-2xl mx-auto" ref={faqRef}>
        <div className='hidden md:block lg:w-[552px] lg:h-[652px] bg-no-repeat bg-contain' data-aos="flip-left" data-aos-easing="ease-in-out" data-aos-offset="100">
          <img src="home/faq-image-sec.png" alt="" className='w-full h-full' />
        </div>
        <div className="flex-grow h-full flex flex-col justify-center items-center md:items-end gap-5 md:gap-0" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-offset="200">
          <h1 className='md:w-[353px] lg:w-[660px] font-sofia font-bold text-center md:text-end text-[34px] md:text-[36px] lg:text-[59px] text-secondary'>Monitoring Kesehatan Anak-anak Lebih Mudah dengan Aplikasi Ini!</h1>
          <img src="home/faq-image-sec.png" alt="" className='md:hidden' />
          <p className='md:mt-7 font-roboto text-center md:text-end text-[24px] md:text-[18px] lg:text-3xl md:w-[340px] lg:w-[678px] text-[rgba(102,102,102,0.56)]'>Tingkatkan kesehatan anak-anak Indonesia. Mereka adalah masa depan kita. Peduli dan perhatikan kesehatan mereka. Bersama, ciptakan Indonesia lebih kuat. Jelajahi FAQ kami sekarang!</p>
          <Link href='#' as='button' className='w-full md:w-[252px] mt-14 text-[22px] h-[57px] bg-primary rounded-lg text-white'>Pelajari</Link>
        </div>
      </div>

      <div className="relative w-full h-[720px] md:h-[725px] lg:h-[815px] bg-primary bg-opacity-[0.08]">
        <div className="flex flex-col justify-center items-center h-full px-4 md:p-0">
          <h1 className='text-secondary font-sofia text-[34px] md:text-[36px] lg:text-6xl md:w-[754px] lg:w-[894px] text-center' data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-offset="100">Temukan Tanggal Imunisasi yang <span className='text-primary'>Tepat</span> untuk Buah Hati Anda!</h1>
          <div className='h-fit lg:h-[507px] w-full md:w-[686px] lg:w-[1269px] bg-white rounded-3xl mt-8 drop-shadow-lg p-8 lg:p-4 flex flex-col justify-center items-center' data-aos="flip-up" data-aos-easing="ease-in-out" data-aos-offset="100">
            <form onSubmit={searchImmunizationHandler} className='flex flex-col lg:flex-row justify-around gap-4 font-sofia w-full'>
              <div className="flex flex-col gap-2">
                <label htmlFor="gender" className='text-primary text-xl md:text-3xl'>Jenis Kelamin</label>
                <select name="gender" id="gender" className='lg:w-[375px] h-14 text-lg md:text-xl border-[#D6D6D6] rounded-2xl shadow-sm' value={childForm.gender} onChange={(e) => setChildForm({ ...childForm, gender: e.target.value })}>
                  <option value="perempuan">Perempuan</option>
                  <option value="laki-laki">Laki-Laki</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="birthdate" className='text-primary text-xl md:text-3xl'>Tanggal Lahir</label>
                <input type="date" name="birthdate" id="birthdate" className='lg:w-[375px] h-14 text-lg md:text-xl border-[#D6D6D6] rounded-2xl shadow-sm' value={childForm.date_of_birth} onChange={(e) => setChildForm({ ...childForm, date_of_birth: e.target.value })} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="gender" className='text-primary text-xl hidden lg:block md:text-3xl opacity-0'>.</label>
                <button type='submit' className='lg:w-[229px] h-14 bg-primary text-white rounded-2xl text-lg'>Cari</button>
              </div>
            </form>
            <div className="flex flex-col w-full px-4 mt-4 gap-4">
              {immunizations.length > 0 &&
                <>
                  <h1 className='text-center text-2xl font-sofia font-bold text-primary'>Imunisasi yang harus segera dilakukan</h1>
                  {immunizations.map((immunization) => (
                    <p className='text-center text-primary font-roboto text-xl' key={immunization.id}>{immunization.name} - {immunization.immunization_date}</p>
                  ))}
                </>
              }
            </div>
          </div>
        </div>
        <div className="absolute -z-10 w-full h-[379px] bg-primary bottom-0 left-0 rounded-t-[100px]"></div>
      </div>

      <div className="w-full h-[1008px] md:h-[653px] lg:h-[815px]" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-offset="400">
        <div className="flex flex-col-reverse md:flex-row h-full justify-center items-center gap-5 max-w-screen-2xl mx-auto">
          <div className="w-[350px] h-[430px] md:w-[367px] md:h-[570px] lg:w-[666px] lg:h-[742px] bg-primary flex flex-col justify-center md:items-center gap-6 px-2 md:px-8 lg:px-0">
            <h1 className='text-[34px] md:text-[36px] lg:text-6xl md:w-[287px] lg:w-[502px] font-sofia text-white font-bold text-center md:text-start'>Mari, Dukung Tumbuh Kembang Anak <span className='underline'> Demi Masa Depan yang Lebih Baik</span></h1>
            <div className="flex flex-col lg:flex-row gap-6">
              <Link href='#' className='md:w-[267px] h-[52.3px] bg-[#378079] rounded-lg text-white text-[16px] md:text-[22px] font-roboto' as='button'>Gabung Sekarang!</Link>
              <Link href='#' className='md:w-[267px] lg:w-[211px] h-[52.3px] border border-white rounded-lg text-white text-[16px] md:text-[22px] font-roboto' as='button'>Hubungi Kami</Link>
            </div>
          </div>
          <div className="w-[350px] h-[430px] md:w-[367px] md:h-[570px] lg:w-[666px] lg:h-[742px]">
            <img src="home/anaksd.jpeg" alt="" className='object-cover w-full h-full' />
          </div>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Index