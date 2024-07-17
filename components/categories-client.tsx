'use client';

import React from 'react';
import Heading from './ui/heading';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { Separator } from './ui/separator';
import { useParams, useRouter } from 'next/navigation';

import ApiList from './ui/api-list';
import { CategoryColumn, columns } from './ui/table/columns-categories';
import { DataTable } from './ui/table/data-table';

interface CategoriesClientProps {
  data: CategoryColumn[];
}

const CategoriesClient = ({ data }: CategoriesClientProps) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Categories (${data.length})`}
          description='Manage categories for your store'
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/categories/new`)}
        >
          <Plus className='mr-2 h-4 w-4' />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey='name' />
      <Heading title='API' description='Manage API calls for categories' />
      <Separator />
      <ApiList entityName='categories' entityIdName='categoryId' />
    </>
  );
};

export default CategoriesClient;
