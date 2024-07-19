'use client';

import React from 'react';
import Heading from './ui/heading';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { Separator } from './ui/separator';
import { useParams, useRouter } from 'next/navigation';

import { DataTable } from './ui/table/data-table';
import ApiList from './ui/api-list';
import { columns, ProductColumn } from './ui/table/columns-products';

interface ProductClientProps {
  data: ProductColumn[];
}

const ProductClient = ({ data }: ProductClientProps) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Products (${data.length})`}
          description='Manage products for your store'
        />
        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
          <Plus className='mr-2 h-4 w-4' />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey='name' />
      <Heading title='API' description='Manage API calls for products' />
      <Separator />
      <ApiList entityName='products' entityIdName='productId' />
    </>
  );
};

export default ProductClient;
