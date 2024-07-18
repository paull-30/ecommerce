'use client';

import React from 'react';
import Heading from './ui/heading';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { Separator } from './ui/separator';
import { useParams, useRouter } from 'next/navigation';

import ApiList from './ui/api-list';

import { DataTable } from './ui/table/data-table';
import { ColorColumn, columns } from './ui/table/columns-colors';

interface ColorsClientProps {
  data: ColorColumn[];
}

const ColorsClient = ({ data }: ColorsClientProps) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Colors (${data.length})`}
          description='Manage colors for your store'
        />
        <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
          <Plus className='mr-2 h-4 w-4' />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey='name' />
      <Heading title='API' description='Manage API calls for colors' />
      <Separator />
      <ApiList entityName='colors' entityIdName='colorId' />
    </>
  );
};

export default ColorsClient;
