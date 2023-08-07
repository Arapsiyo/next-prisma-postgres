import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  //const body = await req.json();
  const { user } = await req.json();
  console.log('user: ', user);
  //prisma.user.create(body);
  const result = await prisma.user.create({
    data: {
      email: user.email,
      password: user.password,
      name: user.name,
    },
  });

  //return res.json('test');
  return new NextResponse(JSON.stringify(user), { status: 201 });
};
