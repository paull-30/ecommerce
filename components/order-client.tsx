'use client';

import React from 'react';
import Heading from './ui/heading';
import { Separator } from './ui/separator';
import { useParams, useRouter } from 'next/navigation';
import { DataTable } from './ui/table/data-table';
import { columns, OrderColumn } from './ui/table/columns-orders';

interface OrderClientProps {
  data: OrderColumn[];
}

const OrderClient = ({ data }: OrderClientProps) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description='Manage orders for your store'
      />
      <Separator />
      <DataTable columns={columns} data={data} searchKey='products' />
    </>
  );
};

export default OrderClient;
