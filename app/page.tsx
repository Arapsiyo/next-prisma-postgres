import { prisma } from '@/lib/prisma';

export default async function Home() {
  // const user = await prisma.user.findFirst({
  //   where: {
  //     email: 'test@test.com',
  //   },
  // });
  const users = await prisma.user.findMany();
  return (
    <main>
      <h1>Hello</h1>
      {/* {users.map((user) => (
        <div key={user.id}>
          <ul>
            <li>{user.id}</li>
            <li>{user.email}</li>
            <li>{user.password}</li>
            <li>{user.name}</li>
          </ul>
          <p>----------------------</p>
        </div>
      ))} */}
    </main>
  );
}
