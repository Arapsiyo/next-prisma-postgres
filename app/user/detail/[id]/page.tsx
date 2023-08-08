import { prisma } from '@/lib/prisma';
import React from 'react';
import { notFound } from 'next/navigation';

const getData = async (id: string) => {
  const res = await fetch(`/api/user/${id}`, {
    method: 'GET',
    cache: 'no-store',
  });
  if (!res.ok) {
    return notFound();
  }

  return res.json();
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const user = await getData(params.id);

  return {
    id: user?.id,
    email: user?.email,
    password: user?.password,
    name: user?.name,
  };
}

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const user = await getData(params.id);

  return (
    <div>
      {user && (
        <ul>
          <li>{user.id}</li>
          <li>{user.email}</li>
          <li>{user.password}</li>
          <li>{user.name}</li>
        </ul>
      )}
    </div>
  );
};

export default DetailPage;
