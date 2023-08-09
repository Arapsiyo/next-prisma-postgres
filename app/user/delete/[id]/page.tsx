'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const DeletePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
  });

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await fetch(`/api/user/${id}`, {
          method: 'GET',
          cache: 'no-store',
        });
        const data = await res.json();

        setUser({
          email: data.email,
          password: data.password,
          name: data.name,
        });
      } catch (error) {
        console.log(error);
      }
    };
    makeRequest();
  }, [id]);

  const router = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await fetch(`/api/user/${params.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user }),
      });
      setUser({
        email: '',
        password: '',
        name: '',
      });
      router.push('/user');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form className="m-5" onSubmit={handleSubmit}>
        <div>
          <span className="font-bold">Email:</span> {user.email}
        </div>
        <div>
          <span className="font-bold">Password:</span> {user.password}
        </div>
        <div>
          <span className="font-bold">Name:</span> {user.name}
        </div>

        <button className="bg-red-300">Delete</button>
      </form>
    </div>
  );
};

export default DeletePage;
