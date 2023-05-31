'use client';
import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import css from './Navbar.module.css';

export default function Navbar() {
  const [isDarkMode, setDarkMode] = useState(false);
  const userSlice = useSelector((state) => state.UsersSlice);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  console.log(userSlice);

  return (
    <nav>
      <Flex
        w='100%'
        h='81px'
        bg='#F9FAFA'
        alignItems='center'
        justify='space-between'
        paddingLeft='95.26px'
        paddingRight='128.97px'
      >
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={40}
        />
        {userSlice.length > 0 && (
          <Flex justify='flex-start' align='center'>
            <img
              src={userSlice[0].avatar}
              alt='user avatar'
              className={css.header_profile_avatar}
            />
            <Flex direction='column' justify='flex-start' align='flex-start'>
              <p
                className={css.header_profile_name}
              >{`${userSlice[0].first_name} ${userSlice[0].last_name}`}</p>
              <p className={css.header_profile_email}>{userSlice[0].email}</p>
            </Flex>
          </Flex>
        )}
      </Flex>
    </nav>
  );
}
