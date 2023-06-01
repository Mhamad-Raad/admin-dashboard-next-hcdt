'use client';

import { Flex } from '@chakra-ui/react';
import Modal from '../Modal/Modal';
import css from './HomeHeader.module.css';

export default function HomeHeader() {

  return (
    <Flex justify='space-between' align='center'>
      <div>
        <h2 className={css.home_title}>Users List</h2>
        <p className={css.home_description}>Create, Update, Delete Users</p>
      </div>
      
      <Modal />
    </Flex>
  );
}
