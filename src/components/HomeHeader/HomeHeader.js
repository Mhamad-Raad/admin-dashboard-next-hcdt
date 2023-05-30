'use client';

import { Flex, Button } from '@chakra-ui/react';
import css from './HomeHeader.module.css';

export default function HomeHeader() {
  return (
    <Flex justify='space-between' align='center'>
      <div>
        <h2 className={css.home_title}>Users List</h2>
        <p className={css.home_description}>Create, Update, Delete Users</p>
      </div>
      <button type='button' className={css.header_button}>
        <span className={css.header_button_plus}>
          +
        </span>
        <span>
          Create
        </span>
      </button>
    </Flex>
  );
}
