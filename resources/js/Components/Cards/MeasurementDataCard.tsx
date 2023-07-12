import { asset } from '@/Helper/document_file'
import { Measurement } from '@/types'
import { Link } from '@inertiajs/react'
import moment from 'moment'
import React from 'react'
import LinkButton from '../LinkButton'

interface Props {
  measurement: Measurement,
  childId: number
  seeAnalysis?: boolean,
}

const MeasurementDataCard = ({ measurement, childId, seeAnalysis = true }: Props) => {
  return (
    <div className="w-full mt-2 p-4">
      <div className="flex flex-row justify-between font-sofia">
        <h1 className='text-3xl font-bold'>Hasil Pertumbuhan</h1>
        <div className="flex flex-row gap-4">
          <Link href={route('pengukuran.index', childId)} className='font-sofia text-white bg-primary px-2 py-1 rounded-lg text-xl'>Lihat Semua</Link>
          {
            seeAnalysis && <Link className='bg-yellow-500 hover:bg-yellow-600 font-sofia text-white px-2 py-1 rounded-lg text-xl' href={route('ask.growth', childId)}>Analisis Pertumbuhan</Link>
          }
        </div>
      </div>
      <div className="rounded-3xl shadow-lg border h-[540px] mt-4 flex flex-col">
        <div className="flex flex-row gap-4 justify-around items-center px-4 pt-4">
          <div className="bg-green-200 h-[460px] w-full rounded-3xl flex flex-col">
            <div className="h-[260px] bg-green-300 rounded-t-3xl flex flex-col justify-center items-center">
              <img src={asset('root', 'assets/weight.png')} className='w-48' />
            </div>
            <div className="flex flex-grow flex-col justify-center items-center">
              <div className="font-roboto">
                <p className='text-3xl'>Berat</p>
                <p className='text-5xl font-bold mt-2'>{measurement.weight} <span className='text-3xl font-normal'>Kg</span></p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-200 h-[460px] w-full rounded-3xl flex flex-col">
            <div className="h-[260px] bg-yellow-300 rounded-t-3xl flex flex-col justify-center items-center">
              <img src={asset('root', 'assets/height.png')} className='w-48' />
            </div>
            <div className="flex flex-grow flex-col justify-center items-center">
              <div className="font-roboto">
                <p className='text-3xl'>Tinggi</p>
                <p className='text-5xl font-bold mt-2'>{measurement.height} <span className='text-3xl font-normal'>cm</span></p>
              </div>
            </div>
          </div>
          <div className="bg-red-200 h-[460px] w-full rounded-3xl flex flex-col">
            <div className="h-[260px] bg-red-300 rounded-t-3xl flex flex-col justify-center items-center">
              <img src={asset('root', 'assets/head-circumference.png')} className='w-48' />
            </div>
            <div className="flex flex-grow flex-col justify-center items-center">
              <div className="font-roboto">
                <p className='text-3xl'>Lingkar Kepala</p>
                <p className='text-5xl font-bold mt-2'>{measurement.head_circumference} <span className='text-3xl font-normal'>cm</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 flex-grow flex flex-row items-center">
          <p className='text-xl'>Terakhir diperbaharui : <span className='font-bold'>{moment(measurement.updated_at).format("DD MMM YYYY - H:mm")}</span></p>
        </div>
      </div>
    </div>
  )
}

export default MeasurementDataCard