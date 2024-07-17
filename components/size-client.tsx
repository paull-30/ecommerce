'use client';

import React from 'react';
import Heading from './ui/heading';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { Separator } from './ui/separator';
import { useParams, useRouter } from 'next/navigation';

import ApiList from './ui/api-list';
import { columns, SizeColumn } from './ui/table/columns-sizes';
import { DataTable } from './ui/table/data-table';

interface SizesClientProps {
  data: SizeColumn[];
}

const SizesClient = ({ data }: SizesClientProps) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Sizes (${data.length})`}
          description='Manage sizes for your store'
        />
        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
          <Plus className='mr-2 h-4 w-4' />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey='name' />
      <Heading title='API' description='Manage API calls for Sizes' />
      <Separator />
      <ApiList entityName='sizes' entityIdName='sizeId' />
    </>
  );
};

export default SizesClient;
