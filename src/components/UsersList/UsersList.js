'use client';
import { useEffect } from 'react';
import UserItem from './UsersItem';

import css from './UsersList.module.css';

const DUMMY = [
  {
    id: 1,
    avatar: 'https://picsum.photos/100',
    email: 'hama@gmail.com',
    firstName: 'Mhamad',
    lastName: 'Raad',
  },
  {
    id: 2,
    avatar: 'https://picsum.photos/200',
    email: 'Ali@gmail.com',
    firstName: 'Ali',
    lastName: 'AbdulAmeer',
  },
  {
    id: 3,
    avatar: 'https://picsum.photos/300',
    email: 'Renwar@gmail.com',
    firstName: 'Renwar',
    lastName: 'Bakhtyar',
  },
];

export default function UsersList() {
  useEffect(async () => {
    const data = await fetch('https://reqres.in/api/users?page=2')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log('here');
        return data
      })
      .catch(() => console.log('error'));

    console.log(data);
  }, []);

  console.log('here');
  return (
    <table className={css.users_table}>
      <thead>
        <tr>
          <th></th>
          <th>ID</th>
          <th>Avatar</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th className={css.table_actions_header}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {DUMMY.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </tbody>
    </table>
  );
}
