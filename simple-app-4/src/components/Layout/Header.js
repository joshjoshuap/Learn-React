import { Fragment } from 'react';
import style from './Header.module.css';
import CartButton from './CartButton';
import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {
  return (
    <Fragment>
      <header className={style.header}>
        <h1> Food Meals </h1>
        <CartButton onClick={props.onShowCart}/>
      </header>
      <div className={style['main-image']}>
        <img src={mealsImage} alt='Table with full of foods' />
      </div>
    </Fragment>
  )
}

export default Header;