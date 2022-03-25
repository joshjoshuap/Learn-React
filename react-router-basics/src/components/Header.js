import { NavLink } from 'react-router-dom';

import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/welcome" activeClassName={style.active}>
              Welcome
            </NavLink>
          </li>

          <li>
            <NavLink to="/product" activeClassName={style.active} >
              Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
