import cryptoAPI from "../cryptoAPI.js";
import CryptoCoin from "./CryptoCoin.jsx";

const CoinInfo = (apiURL) => {
  return <CryptoCoin info={apiURL.then((data) => data[0])} />;
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
        {Object.values(cryptoAPI).forEach((apiURL) => CoinInfo(apiURL))}
      </tbody>
    </table>
  );
};

export default CryptoTable;
