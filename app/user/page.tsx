import { prisma } from '@/lib/prisma';
import React from 'react';

const Users = async () => {
  const users = await prisma.user.findMany();
  console.log('users: ', users);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <ul>
            <li>
              {user.id} {user.email} {user.password} {user.name}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Users;
