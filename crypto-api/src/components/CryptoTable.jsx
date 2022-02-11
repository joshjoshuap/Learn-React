import cryptoAPI from "../cryptoAPI.js";
import CryptoCoin from "./CryptoCoin.jsx";

const CoinRow = (apiURL) => {
  return <CryptoCoin url={apiURL} />;
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
      <tbody>
        <tr>{Object.values(cryptoAPI).forEach((apiURL) => CoinRow(apiURL))}</tr>
      </tbody>
    </table>
  );
};

export default CryptoTable;
