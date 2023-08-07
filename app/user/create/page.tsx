'use client';
import React, { useState } from 'react';

// interface User {
//   email: String;
//   password: String;
//   name: String;
// }

const Page: React.FC = () => {
  //const [, setEmail] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      // const body = email;
      // console.log(typeof body);

      await fetch(`/api/user/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user }),
      });
      setUser({
        email: '',
        password: '',
        name: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          placeholder="Password"
          type="text"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <input
          placeholder="name"
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Page;
