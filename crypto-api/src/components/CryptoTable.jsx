import CryptoCoin from "./CryptoCoin.jsx";
import cryptoAPI from "../cryptoAPI.js";

const CryptoTable = () => {
  const fetchAPI = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => cryptoInfo(data[0]));
  };

  const getInfo = (cryptoAPI) => {
    const api = Object.values(cryptoAPI)[0];
    fetchAPI(api);
  };

  const cryptoInfo = (info) => {
    return <CryptoCoin info={info} name='wow'/>;
  };

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
