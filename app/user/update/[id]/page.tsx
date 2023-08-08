'use client';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

type userType = {
  id: string;
  email: string;
  password: string;
  name: string;
};

const Update = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [user, setUser] = useState<userType>({
    id: '',
    email: '',
    password: '',
    name: '',
  });
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/user/${id}`, {
          method: 'GET',
          cache: 'no-store',
        });
        const data = await res.json();
        console.log('data ', data);
        setUser({
          id: data.id,
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const result = await fetch(
        `http://localhost:3000/api/user/update/${id}`,
        {
          method: 'PUT',
          cache: 'no-store',
          body: JSON.stringify({ user }),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          type="text"
          value={user.email}
          name="email"
          onChange={handleChange}
        />
        <input
          placeholder="Password"
          type="text"
          value={user.password}
          name="password"
          onChange={handleChange}
        />
        <input
          placeholder="name"
          type="text"
          value={user.name}
          name="name"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Update;
