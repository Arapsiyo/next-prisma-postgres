import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const POST = async (req: NextRequest) => {
  const { user } = await req.json();

  const result = await prisma.user.create({
    data: {
      email: user.email,
      password: user.password,
      name: user.name,
    },
  });

  return new NextResponse(JSON.stringify(user), { status: 201 });
};
