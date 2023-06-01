'use client';
import useSWR from 'swr';
import ReactPaginate from 'react-paginate';
import { Flex } from '@chakra-ui/react';
import {  useRouter, useSearchParams, usePathname } from 'next/navigation';

import HomeHeader from '../components/HomeHeader/HomeHeader';
import UsersList from '../components/UsersList/UsersList';
import Loading from '../components/Loading/Loading.js';

import css from '../styles/page.module.css';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home({id}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  let search ='';
  if(searchParams.get('page') !== null) {
    search = +searchParams.get('page');
  }

  let URL = 'https://reqres.in/api/users'

  if(search !== null && !isNaN(search)) URL += `?page=${search}`; 

  const { data, error, isLoading } = useSWR(
    URL,
    fetcher
  );

  const handlePageClick = (event) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', event.selected + 1);
    router.replace(`${pathname}?${params}`);
  };

  return (
    <div className={css.home}>
      <HomeHeader />
      {error && !isLoading && <div>failed to load</div>}
      {isLoading && <Loading />}
      {!isLoading && !error && <>
          <UsersList usersData={data?.data} />
          <Flex w='100%' justify='flex-end' align='center'>
          <ReactPaginate
            className={css.pagination}
            breakLabel='...'
            nextLabel='>'
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={data.total_pages}
            previousLabel='<'
            renderOnZeroPageCount={null}
            activeLinkClassName={css.pagination_active_link}
          />
        </Flex>
     </>}
     
    </div>
  );
}
