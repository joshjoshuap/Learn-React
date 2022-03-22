import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { uiActions } from './store/ui-slice';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible); // receives the state and returns from the ui-slice
  const cart = useSelector((state) => state.cart); // get the data value from the cart-slice.js
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending..',
          message: 'Sending cart data to server...',
        })
      );

      // fetch api and send the cart data to the server
      const res = await fetch(
        'https://shop-cart-1e3fd-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      // check if the response is ok
      if (!res.ok) {
        throw new Error('Sending cart data failed!');
      }

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Sent',
          message: 'Data sent to server!',
        })
      );

      const data = await res.json();
    };

    // prevent sending cart data on initial render (when the app is first loaded) to prevent sending data on page refresh
    if (isInitial) {
      isInitial = false;
      return;
    }

    // send cart data to server every time the cart is updated
    sendCartData().catch((error) =>
      dispatch(
        uiActions.showNotification({
          status: 'failed',
          title: 'Error',
          message: 'Data sending failed!',
        })
      )
    );
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
