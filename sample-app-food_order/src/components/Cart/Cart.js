import React, { useContext, useState } from 'react';
import style from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
  const confirmHandler = () => event => {
    event.preventDefault();
  }

  const [isCheckOut, setCheckOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  // remove item from cart and update cart context state 
  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };

  // add item to cart and update cart state in context provider 
  const addItemToCartHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setCheckOut(true);
  }

  // submit data to server
  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    // data to be sent to server as json
    await fetch('https://food-order-60ea8-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderItems: cartCtx.items
      }),
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  }

  const cartItems = (
    <ul className={style['cart-items']}>
      {cartCtx.items.map(item =>
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={addItemToCartHandler.bind(null, item)} />)}
    </ul>
  );

  const modalActions = <div className={style.actions}>
    <button className={style['button--alt']} onClick={props.onCloseCart}>Close</button>
    {hasItems && <button className={style.button} onClick={orderHandler}>Order</button>}
  </div>

  const cartModalContent =
    <React.Fragment>
      {cartItems}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      {isCheckOut && <Checkout onSumitOrder={submitOrderHandler} onCancel={props.onCloseCart} />}
      {!isCheckOut && modalActions}
    </React.Fragment>

  const isSubmittingModalContent = <p>Sending order Data.</p>

  const didSubmitModalContent = <p>Order Submitted.</p>

  return (
    <Modal onHide={props.onCloseCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
}

export default Cart;