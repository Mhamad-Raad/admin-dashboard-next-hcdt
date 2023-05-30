import HomeHeader from '../components/HomeHeader/HomeHeader';
import UsersList from '../components/UsersList/UsersList';

import css from '../styles/page.module.css';

export default function Home() {
  return (
    <div className={css.home}>
      <HomeHeader />
      <UsersList />
    </div>
  );
}
