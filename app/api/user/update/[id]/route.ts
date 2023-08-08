import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

type UserType = {
  id: Number;
  email: string;
  password: string;
  name: string;
};

export const PUT = async (req: NextRequest, res: NextResponse) => {
  const { user } = await req.json();

  try {
    const updateUser = await prisma.user.updateMany({
      where: { id: Number(user.id) },
      data: {
        email: user.email,
        password: user.password,
        name: user.name,
      },
    });

    return new NextResponse(JSON.stringify(updateUser));
  } catch (err) {
    return new NextRequest(`Error: ${err}`);
  }
};
