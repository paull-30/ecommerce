import CategoriesClient from '@/components/categories-client';
import { CategoryColumn } from '@/components/ui/table/columns-categories';
import prisma from '@/lib/prismadb';
import { format } from 'date-fns';

const CategoriesPage = async ({ params }: { params: { storeId: string } }) => {
  const categories = await prisma.category.findMany({
    where: { storeId: params.storeId },
    include: { billboard: true },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedCategories: CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.billboard.label,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));
  return (
    <div className='flex flex-col '>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <CategoriesClient data={formattedCategories} />
      </div>
    </div>
  );
};

export default CategoriesPage;
