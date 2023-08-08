import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hash } from 'bcrypt-ts';

export const POST = async (req: NextRequest) => {
  const { user } = await req.json();
  const hashedPassword = await hash(user.password, 5);
  const result = await prisma.user.create({
    data: {
      email: user.email,
      password: hashedPassword,
      name: user.name,
    },
  });

  return new NextResponse(JSON.stringify(user), { status: 201 });
};
