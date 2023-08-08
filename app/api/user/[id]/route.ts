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
export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  try {
    const user = await prisma.user.delete({
      where: { id: Number(id) },
    });
    return new NextResponse(JSON.stringify(user));
  } catch (err) {
    return new NextRequest(`Error: ${err}`);
  }
};
type UserType = {
  id: Number;
  email: string;
  password: string;
  name: string;
};

export const UPDATE = async (
  req: NextRequest,
  user: UserType,
  { params }: { params: { id: string } }
) => {
  console.log('req body ', req.body);

  const { id } = params;
  try {
    const updateUser = await prisma.user.update({
      where: { id: Number(id) },
      data: {},
    });
    return new NextResponse(JSON.stringify(user));
  } catch (err) {
    return new NextRequest(`Error: ${err}`);
  }
};
