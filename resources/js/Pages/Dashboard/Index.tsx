import DashboardLayout from '@/Layouts/DashboardLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const Index = () => {
  return (
    <DashboardLayout>
      <Head title="Dashboard" />
      <div className="text-3xl">Welcome To Dashboard</div>
    </DashboardLayout>
  )
}

export default Index