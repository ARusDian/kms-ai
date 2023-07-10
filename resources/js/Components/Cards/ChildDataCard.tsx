import { asset } from '@/Helper/document_file';
import { Children } from '@/types';
import React from 'react';
import moment from 'moment';
import { Link } from '@inertiajs/react';

interface Props {
  child: Children
}

const ChildDataCard = ({ child }: Props) => {
  const totalAgeDays = moment().diff(child.date_of_birth, 'days');
  const childAgeObj = React.useMemo(() => {
    return {
      years: Math.floor(totalAgeDays / 365),
      months: Math.floor((totalAgeDays % 365) / 30)
    }
  }, []);

  return (
    <Link href={route('data-anak.show', child.id)} className="w-[600px] h-60 border border-primary shadow-lg rounded-2xl flex flex-row font-sofia group hover:bg-primary transition-color duration-300">
      <div className="w-[240px] h-full p-4">
        <img src={asset('public', child.photo!.path)} className='w-full h-full object-cover rounded-full border border-primary' />
      </div>
      <div className="p-4 flex flex-col justify-center gap-3 w-[250px] flex-grow">
        <h1 className='text-3xl font-bold group-hover:text-white transition-color duration-300 '>{child.name}</h1>
        <p className='text-xl font-bold text-primary group-hover:text-white transition-color duration-300'>{childAgeObj.years} Tahun {childAgeObj.months} Bulan</p>
      </div>
      <div className="m-auto pr-8">
        <div className="w-10 h-10 border-b-[3px] border-r-[3px] border-primary -rotate-45 group-hover:rotate-[135deg] group-hover:border-white transition-all duration-300"></div>
      </div>
    </Link>
  )
}

export default ChildDataCard