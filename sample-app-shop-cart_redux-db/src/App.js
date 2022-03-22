import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible); // receives the state and returns from the ui-slice
  const cart = useSelector((state) => state.cart); // get the data value from the cart-slice.js

  useEffect(() => {
    fetch(
      'https://shop-cart-1e3fd-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
      {
        method: 'PUT',
        body: JSON.stringify(cart),
      }
    );
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
