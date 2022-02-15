import { useState } from "react";

const CryptoCoin = (props) => {
  const [info, setInfo] = useState();

  fetch(props.url)
    .then((res) => res.json())
    .then((data) => setInfo(data));


  return (
    <tr>
      <td>wow</td>
    </tr>
  );
};

export default CryptoCoin;
