import CryptoCoin from "./CryptoCoin.jsx";
import cryptoAPI from "../cryptoAPI.js";

const getData = (apiURL) => {
  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => <h1>wow</h1>);
};

const coinRow = (apiURL) => {
  <CryptoCoin url={apiURL} name="wow"/>;
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
      <tbody>{coinRow(Object.values(cryptoAPI))}</tbody>
    </table>
  );
};

export { CryptoTable, coinRow };
