import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams(); // get the params id from the URL (e.g. /product-detail/:productId) and store it in the params variable

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
