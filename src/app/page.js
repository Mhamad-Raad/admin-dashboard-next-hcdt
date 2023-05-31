'use client';

import HomeHeader from '../components/HomeHeader/HomeHeader';
import UsersList from '../components/UsersList/UsersList';
import Loading from '../components/Loading/Loading.js';

import useSWR from 'swr';

import css from '../styles/page.module.css';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR(
    'https://reqres.in/api/users',
    fetcher
  );

  return (
    <div className={css.home}>
      <HomeHeader />
      {(error && !isLoading) && <div>failed to load</div>}
      {isLoading && <Loading />}
      {(!isLoading && !error) && <UsersList usersData={data?.data} />}
    </div>
  );
}
