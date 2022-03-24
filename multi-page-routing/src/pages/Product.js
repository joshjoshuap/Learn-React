import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <section>
      <h1>Product</h1>
      <ul>
        <li>
          <Link to="/product/p1">Apple</Link>
        </li>
        <li>
          <Link to="/product/p2">Banana</Link>
        </li>
        <li>
          <Link to="/product/p3">Orange</Link>
        </li>
      </ul>
    </section>
  );
};

export default Product;
