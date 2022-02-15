import CryptoCoin from "./CryptoCoin.jsx";
import cryptoAPI from "../cryptoAPI.js";

const getInfo = (cryptoAPI) => {
  const api = Object.values(cryptoAPI)[0];
  return <CryptoCoin url={api} />;
};

const CryptoTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Icon</th>
          <th>Name</th>
          <th>Coin</th>
          <th>Price</th>
          <th>7d</th>
          <th>24h</th>
          <th>Volume</th>
        </tr>
      </thead>
      <tbody>{cryptoAPI.map(getInfo)}</tbody>
    </table>
  );
};

export default CryptoTable;
