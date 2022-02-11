const CryptoCoin = (props) => {
  console.log(props.info);
  return (
    <tr>
      <td>{props.info.symbol}</td>
      <td>aaa</td>
    </tr>
  );
};

export default CryptoCoin;
