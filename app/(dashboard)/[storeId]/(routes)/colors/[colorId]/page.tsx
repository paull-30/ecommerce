import ColorForm from '@/components/color-form';
import prisma from '@/lib/prismadb';

const ColorPage = async ({ params }: { params: { colorId: string } }) => {
  const color = await prisma.color.findUnique({
    where: {
      id: params.colorId,
    },
  });
  return (
    <div className='flex-col flex'>
      <div className='flex-1 space-y-4 p-8'>
        <ColorForm initialData={color} />
      </div>
    </div>
  );
};

export default ColorPage;
