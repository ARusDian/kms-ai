import { ChildImmunization } from '@/types'
import { Link } from '@inertiajs/react'
import React from 'react'

interface Props {
  childImmunizations: ChildImmunization[],
}

const ImmunizationDataCard = ({ childImmunizations }: Props) => {
  return (
    <div className="mt-2 w-full p-4">
      <div className="flex flex-row justify-between font-sofia">
        <h1 className='text-3xl font-bold'>Imunisasi</h1>
        <Link href={'#'} className='font-sofia text-white bg-primary px-2 py-1 rounded-lg text-xl'>Lihat Semua</Link>
      </div>
      <div className="h-[660px] shadow-lg p-4 border mt-4 rounded-3xl">
        <div className="flex flex-col justify-around gap-4 h-full">
          {
            !(childImmunizations.length > 0) ?
              <div className="w-full h-full flex flex-col justify-center items-center">
                <h1 className='text-4xl font-roboto text-center opacity-40'>Belum ada Vaksinasi</h1>
              </div>
              : (
                childImmunizations.map((childImmunization) => (
                  <div className="w-full h-full rounded-3xl p-4 border" key={childImmunization.id}>
                    <div className="flex flex-col h-full items-start gap-4 justify-between">
                      <div className="flex flex-col gap-1 w-full">
                        <div className="flex flex-row justify-between items-center w-full">
                          <h1 className='font-sofia text-3xl font-bold'>{childImmunization.immunization.name}</h1>
                          <p className={`text-xl font-sofia font-bold first-letter:capitalize ${childImmunization.status === 'belum' ? 'text-red-500' : 'text-primary'} `}>{childImmunization.status}</p>
                        </div>
                        <p> <span className='font-bold'>Indikasi :</span> {childImmunization.immunization.indication}</p>
                        <p> <span className='font-bold'>Prevensi :</span> {childImmunization.immunization.prevention}</p>
                      </div>
                      <div className="flex flex-row gap-4">
                        <p className='text-sm font-semibold'>Saran tanggal : {childImmunization.recommended_date}</p>
                      </div>
                    </div>
                  </div>
                ))
              )
          }
        </div>
      </div>
    </div>
  )
}

export default ImmunizationDataCard