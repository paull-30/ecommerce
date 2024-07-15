import BillboardForm from '@/components/billboard-form';
import prisma from '@/lib/prismadb';

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  const billboard = await prisma.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  });
  return (
    <div className='flex-col flex'>
      <div className='flex-1 space-y-4 p-8'>
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
};

export default BillboardPage;
