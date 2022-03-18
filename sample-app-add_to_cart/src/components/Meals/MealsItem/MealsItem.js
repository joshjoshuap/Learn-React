import { useContext } from 'react';
import style from './MealsItem.module.css';
import ItemForm from './ItemForm';
import CartContext from '../../../store/cart-context';

const MealsItem = (props) => {
  const CartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`; // toFixed(2) is used to round the price to 2 decimal places

  const addItemToCartHandler = amount => {
    CartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount
    });
  };

  return (
    <li className={style.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={style.description}>{props.description}</div>
        <div className={style.price}>{price}</div>
      </div>
      <div>
        <ItemForm onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
}

export default MealsItem;