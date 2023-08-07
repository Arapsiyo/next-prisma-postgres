import { prisma } from '@/lib/prisma';
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
  req: NextApiRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  try {
    const user = await prisma.user.findFirst({
      where: { id: Number(id) },
    });

    return new NextResponse(JSON.stringify(user));
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
