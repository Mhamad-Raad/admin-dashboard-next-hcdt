'use client';
import { useState } from 'react';
import { useToast } from '@chakra-ui/react';

import UserItem from './UsersItem';

import css from './UsersList.module.css';


export default function UsersList({usersData}) {
  const [users, setUsers] = useState(usersData)
  const toast = useToast();

  const deleteUser = (id) => {
    const tempUsers = users;
    const newUsers = tempUsers.filter((user)=>user.id !== id );
    setUsers(newUsers);
    // fake deletion because this link does not do anyhting to the datas
    fetch ('https://reqres.in/api/users/' + id.toString(), {
      method: "DELETE",
    }).catch(() => {
          toast({
            title: 'Account Action',
            description: "Soemthing went wrong please try again later",
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
      return;
        })

    toast({
          title: 'Account Delete.',
          description: "Acount Deleted Successfully.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
  }

  const editUser = async (name, email, id) => {
    await fetch(`https://reqres.in/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        job: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast({
          title: 'Account Edited.',
          description: "We've Edited the wanted account your account for you.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      }).catch((e) => {
          toast({
            title: 'Account Action',
            description: "Soemthing went wrong please try again later",
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
        })
  }

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
        {users?.map((user) => (
          <UserItem user={user} key={user.id} onDelete={deleteUser} onEdit={editUser} />
        ))}
      </tbody>
    </table>
  );
}
