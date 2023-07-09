import LinkButton from '@/Components/LinkButton'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Measurement, PageProps } from '@/types'
import { Head, Link, usePage } from '@inertiajs/react'
import { MRT_ColumnDef, MaterialReactTable } from 'material-react-table'
import React, { useMemo } from 'react'

interface Props {
  measurements: Measurement[],
  childId: number,
}

const Index = ({ measurements, childId }: Props) => {
  const dataColumns = useMemo(() => [
    {
      accessorKey: 'weight',
      header: 'Berat Badan (Kg)',
    },
    {
      accessorKey: 'height',
      header: 'Tinggi Badan (cm)',
    },
    {
      accessorKey: 'head_circumference',
      header: 'Lingkar Kepala (cm)',
    },
    {
      accessorKey: 'date_of_measurement',
      header: 'Tanggal Pengukuran',
    },
    {
      accessorKey: 'note',
      header: 'Catatan',
    }
  ] as MRT_ColumnDef<typeof measurements[0]>[]
    , [measurements]);

  return (
    <DashboardLayout>
      <Head title='Data Pengukuran' />
      <div className="mb-4 flex flex-row justify-between w-full">
        <h1 className='text-3xl font-sofia font-bold'>Data Pengukuran</h1>
        <LinkButton href={route('pengukuran.create', childId)} className='font-sofia text-white bg-primary px-2 py-1 rounded-lg text-xl'>Tambah Data</LinkButton>
      </div>
      <div className="">
        <MaterialReactTable
          columns={dataColumns}
          data={measurements}
          enableColumnFilters
          enablePagination
          enableSorting
          enableBottomToolbar
          enableTopToolbar
          enableRowNumbers
          enableRowActions
          positionActionsColumn='last'
          renderRowActions={({ row }) => (
            <div className="flex flex-row gap-2">
              <Link href={route('pengukuran.edit', [childId, row.original.id])} className='px-4 py-2 rounded-lg bg-secondary text-complementary font-roboto font-bold hover:bg-primary'>Edit</Link>
            </div>
          )}
        />
      </div>
    </DashboardLayout>
  )
}

export default Index