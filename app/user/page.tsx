import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import React, { useState } from 'react';

const Users = async () => {
  const users = await prisma.user.findMany();

  //console.log('users: ', users);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <ul>
            <li className="pl-5 m-5">
              {user.id} {user.email} {user.password} {user.name}
              <Link href={`/user/detail/${user.id}`}>
                <span>Detail</span>
              </Link>
              <Link href={`/user/update/${user.id}`}>
                <span>Edit</span>
              </Link>
              <Link href={`http://localhost:3000/user/delete/${user.id}`}>
                <span>Delete</span>
              </Link>
              {/* <span onClick={() => handleDelete(user.id)}>Delete</span> */}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Users;
