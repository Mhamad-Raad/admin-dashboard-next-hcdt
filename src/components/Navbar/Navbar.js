'use client';
import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { addUser, deleteUser } from '../../store/UserSlice';

import css from './Navbar.module.css';

export default function Navbar() {
  const [isDarkMode, setDarkMode] = useState(false);
  const userSlice = useSelector((state) => state.UsersSlice);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <nav>
      <Flex
        w='100%'
        h='81px'
        bg='#F9FAFA'
        alignItems='center'
        paddingLeft='95.26px'
      >
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={40}
        />
      </Flex>
    </nav>
  );
}
