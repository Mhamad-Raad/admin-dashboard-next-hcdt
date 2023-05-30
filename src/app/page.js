import HomeHeader from '../components/HomeHeader/HomeHeader';

import css from '../styles/page.module.css';

export default function Home() {
  return (
    <div className={css.home}>
      <HomeHeader />
    </div>
  );
}
