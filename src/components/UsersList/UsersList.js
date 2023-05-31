'use client';
import { useEffect } from 'react';
import useSWR from 'swr';
import UserItem from './UsersItem';

import css from './UsersList.module.css';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function UsersList() {
  const { data, error, isLoading } = useSWR(
    'https://reqres.in/api/users',
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);
  const { data: users } = data;

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
        {users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </tbody>
    </table>
  );
}
