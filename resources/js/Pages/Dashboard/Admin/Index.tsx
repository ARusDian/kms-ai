import DashboardLayout from '@/Layouts/DashboardLayout'
import { ChildrenWithParent } from '@/types'
import { Head, Link } from '@inertiajs/react'
import { MRT_ColumnDef, MaterialReactTable } from 'material-react-table'
import React, { useMemo } from 'react'

interface Props {
  userName: string,
  children: ChildrenWithParent[],
}

const Index = ({ userName, children }: Props) => {
  const dataColumns = useMemo(() => [
    {
      accessorKey: 'name',
      header: 'Nama',
    },
    {
      accessorKey: 'gender',
      header: 'Jenis Kelamin',
    },
    {
      accessorKey: 'date_of_birth',
      header: 'Tanggal Lahir',
    },
    {
      accessorKey: 'blood_type',
      header: 'Golongan Darah',
    },
    {
      accessorKey: 'alergic_desc',
      header: 'Alergi',
    },
    {
      accessorKey: 'user.name',
      header: 'Nama Orang Tua',
    }
  ] as MRT_ColumnDef<typeof children[0]>[], [children]);


  return (
    <DashboardLayout>
      <Head title="Dashboard" />
      <div className="text-3xl font-sofia font-semibold">Selamat Datang di Dashboard, {userName}!</div>

      <div className="mt-4 flex flex-col gap-4">
        <h1 className='text-2xl font-sofia font-semibold'>Data Anak</h1>
        <MaterialReactTable
          columns={dataColumns}
          data={children}
          enableColumnFilters
          enablePagination
          enableSorting
          enableBottomToolbar
          enableTopToolbar
          enableRowNumbers
          enableRowActions
          positionActionsColumn='last'
          renderRowActions={({ row }) => (
            <div className="flex flex-col gap-2">
              <Link href={route('pengukuran.index', [row.original.id])} className='w-28 text-center px-4 py-2 rounded-lg bg-primary text-complementary font-roboto font-bold hover:bg-primary'>Pengukuran</Link>
              <Link href={route('imunisasi.index', row.original.id)} className='w-28 text-center px-4 py-2 rounded-lg bg-secondary text-complementary font-roboto font-bold hover:bg-primary'>Imunisasi</Link>
            </div>
          )}
        />
      </div>
    </DashboardLayout>
  )
}

export default Index