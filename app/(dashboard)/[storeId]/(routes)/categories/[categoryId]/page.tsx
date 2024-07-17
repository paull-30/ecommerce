import CategoryForm from '@/components/category-form';
import prisma from '@/lib/prismadb';

const CategoryPage = async ({
  params,
}: {
  params: { categoryId: string; storeId: string };
}) => {
  const category = await prisma.category.findUnique({
    where: {
      id: params.categoryId,
    },
  });

  const billboards = await prisma.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
  });
  return (
    <div className='flex-col flex'>
      <div className='flex-1 space-y-4 p-8'>
        <CategoryForm billboards={billboards} initialData={category} />
      </div>
    </div>
  );
};

export default CategoryPage;
