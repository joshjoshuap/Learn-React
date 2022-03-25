import { NavLink } from 'react-router-dom';

import style from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>Quotes Logo</div>
      <nav className={style.nav}>
        <ul>
          <li>
            <NavLink to="quotes">
              Main Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote">
              Add Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
