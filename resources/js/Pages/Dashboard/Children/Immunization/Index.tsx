import DashboardLayout from '@/Layouts/DashboardLayout'
import { Pagination } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react'

interface Props {
  childId: number
}

const Index = ({ childId }: Props) => {
  const [data, setData] = React.useState([]);
  useEffect(() =>  {
    axios.get(route('immunization.child.get', childId)).then(res => setData(res.data));
  },[]);

  console.log(data);

  return (
    <DashboardLayout>
      <h1 className='font-sofia text-3xl font-bold'>Data Imunisasi Anak</h1>
      <Pagination />
    </DashboardLayout>
  )
}

export default Index