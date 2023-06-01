'use client';
import useSWR from 'swr';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';

import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../store/UserSlice';

import Loading from '../../components/Loading/Loading.js';

import css from './details.module.css';

export default function Details() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const pathname = usePathname();
  const index = +pathname.replace('/', '');
  
  const userSlice = useSelector((state) => state.UsersSlice);
  const dispatch = useDispatch();
  
  const { data, error, isLoading } = useSWR(
    `https://reqres.in/api/users/${index}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <Loading />;

  
  if (userSlice.length <= 0) dispatch(addUser(data.data));
  
  const router = useRouter();
  const navigateBack = () => {
    router.back()
  }

  return (
    <div className={css.details}>
      <img
        src={data.data.avatar}
        alt='user avatar'
        className={css.details_img}
      />
      <h2
        className={css.details_name}
      >{`${data.data.first_name} ${data.data.last_name}`}</h2>
      <p className={css.details_email}>{data.data.email}</p>
      <button onClick={navigateBack} className={css.details_back_button}>
        <BiArrowBack />
        <p>Back To Users List</p>
      </button>
    </div>
  );
}
