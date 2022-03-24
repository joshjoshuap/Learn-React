import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Welcome from './pages/Welcome';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/product" element={<Product />} exact/>
          <Route
            path="/product/:productId"
            element={<ProductDetail />}
          />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
