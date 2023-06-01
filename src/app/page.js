'use client';

import HomeHeader from '../components/HomeHeader/HomeHeader';
import UsersList from '../components/UsersList/UsersList';
import Loading from '../components/Loading/Loading.js';

import useSWR from 'swr';
import ReactPaginate from 'react-paginate';
import { Flex } from '@chakra-ui/react';

import css from '../styles/page.module.css';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR(
    'https://reqres.in/api/users',
    fetcher
  );

  const handlePageClick = (event) => {
    console.log(
      `User requested page number ${event.selected}`
    );
  };

  return (
    <div className={css.home}>
      <HomeHeader />
      {error && !isLoading && <div>failed to load</div>}
      {isLoading && <Loading />}
      {!isLoading && !error && <UsersList usersData={data?.data} />}
      <Flex w='100%' justify='flex-end' align='center'>
        <ReactPaginate
          className={css.pagination}
          breakLabel='...'
          nextLabel='>'
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={2}
          previousLabel='<'
          renderOnZeroPageCount={null}
        />
      </Flex>
    </div>
  );
}
