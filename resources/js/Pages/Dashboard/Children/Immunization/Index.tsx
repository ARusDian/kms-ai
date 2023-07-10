import LinkButton from '@/Components/LinkButton';
import Loading from '@/Components/Loading';
import DashboardLayout from '@/Layouts/DashboardLayout'
import { ChildImmunization } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Pagination } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react'

interface PaginationResponse {
  current_page: number,
  data: ChildImmunization[],
  first_page_url: string,
  from: number,
  last_page: number,
  last_page_url: string,
  links: any[],
  next_page_url: string,
  path: string,
  per_page: number,
  prev_page_url: string,
  to: number,
  total: number
}
interface Props {
  childId: number
}

const Index = ({ childId }: Props) => {
  const [data, setData] = React.useState<PaginationResponse>({
    current_page: 0,
    data: [],
    first_page_url: '',
    from: 0,
    last_page: 0,
    last_page_url: '',
    links: [],
    next_page_url: '',
    path: '',
    per_page: 0,
    prev_page_url: '',
    to: 0,
    total: 0
  });

  useEffect(() => {
    axios.get(route('immunization.child.get', childId)).then((res) => setData(res.data.data as PaginationResponse));
  }, []);

  const onChange = (event: React.ChangeEvent<unknown>, value: number) => {
    axios.get(route('immunization.child.get', childId), {
      params: {
        page: value
      }
    }).then((res) => setData(res.data.data as PaginationResponse));
  };

  return (
    <DashboardLayout>
      <Head title="Data Imunisasi Anak" />
      <div className="grid grid-cols-3 w-full">
        <h1 className='font-sofia text-3xl font-bold flex-shrink-0'>Data Imunisasi Anak</h1>
        <div className="m-auto">
          {
            data.data.length > 0 && (
              <Pagination count={data.last_page} onChange={onChange} size='large'/>
            )
          }
        </div>
        <Link href={route('data-anak.show', childId)} className='w-fit font-sofia text-white bg-primary px-4 py-2 rounded-lg text-xl justify-self-end'>Kembali</Link>
      </div>
      {
        data.data.length > 0 ? (
          <>
            <div className="flex flex-col items-center w-full rounded-lg shadow-lg mt-4 gap-4 p-4">
              {data.data.map(childImmunization => (
                <div className="flex flex-col justify-between w-full h-80 border border-primary rounded-lg p-4" key={childImmunization.id}>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex flex-row justify-between items-center w-full">
                      <h1 className='font-sofia text-3xl font-extrabold text-primary'>{childImmunization.immunization.name}</h1>
                      <div className="flex flex-row gap-2 items-center">
                        <p className={`text-xl font-sofia font-bold first-letter:capitalize ${childImmunization.status === 'belum' ? 'text-red-500' : 'text-primary'} `}>{childImmunization.status}</p>
                        <span className='font-bold text-primary'>-</span>
                        <LinkButton href={route('imunisasi.show', [childId, childImmunization.id])} className='font-bold'>{childImmunization.status === 'belum' ? 'Sudah Vaksin?' : 'Edit Data'}</LinkButton>
                      </div>
                    </div>
                    <p> <span className='font-bold'>Tipe :</span> <span className='capitalize'>{childImmunization.immunization.type}</span></p>
                    <p> <span className='font-bold'>Indikasi :</span> {childImmunization.immunization.indication}</p>
                    <p> <span className='font-bold'>Prevensi :</span> {childImmunization.immunization.prevention}</p>
                    <p> <span className='font-bold'>Kontraindikasi :</span> <span className='capitalize'>{childImmunization.immunization.contraindication}</span></p>
                    <p> <span className='font-bold'>Imunisasi Kejar :</span> <span className='capitalize'>{childImmunization.immunization.chase_immunization}</span></p>
                  </div>

                  <div className="flex flex-row gap-4">
                    {childImmunization.status !== "belum" ?
                      <p className='text-sm font-semibold'>Tanggal Imunisasi : {childImmunization.date_of_immunization}</p>
                      :
                      <p className='text-sm font-semibold'>Saran tanggal : {childImmunization.recommended_date}</p>
                    }
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center w-full h-screen">
            <Loading className='w-28 h-28' color='black' />
          </div>
        )
      }
    </DashboardLayout >
  )
}

export default Index