'use client';
import { useState } from 'react';
import { useToast } from '@chakra-ui/react';

import UserItem from './UsersItem';
import Toast from '../Toast/Toast';

import css from './UsersList.module.css';


export default function UsersList({usersData}) {
  const [users, setUsers] = useState(usersData)
  const toast = useToast();

  const deleteUser = (id) => {
    const tempUsers = users;
    const newUsers = tempUsers.filter((user)=>user.id !== id );
    setUsers(newUsers);
    toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
  }

  console.log(users)

  return (
    <table className={css.users_table}>
      <thead>
        <tr>
          <th><Toast /></th>
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
          <UserItem user={user} key={user.id} onDelete={deleteUser} />
        ))}
      </tbody>
    </table>
  );
}
