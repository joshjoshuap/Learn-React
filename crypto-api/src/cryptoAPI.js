const fetchAPI = async (apiURL) => {
  try {
    const res = await fetch(apiURL); // fetching api url
    const data = await res.json(); // convert JSON to object
    return data; // return data objects
  } catch (err) {
    console.log("Fetch Error");
    console.log(err.message); // fetch failed
  }
};

const cryptoAPI = {
  // btc: fetchAPI("https://api.coinlore.net/api/ticker/?id=90"),
  // eth: fetchAPI("https://api.coinlore.net/api/ticker/?id=80"),
  // xrp: fetchAPI("https://api.coinlore.net/api/ticker/?id=58"),
  // bnb: fetchAPI("https://api.coinlore.net/api/ticker/?id=2710"),
  // usdt: fetchAPI("https://api.coinlore.net/api/ticker/?id=518"),
  // usdc: fetchAPI("https://api.coinlore.net/api/ticker/?id=33285"),
  // doge: fetchAPI("https://api.coinlore.net/api/ticker/?id=2"),
  axs: fetchAPI("https://api.coinlore.net/api/ticker/?id=46575"),
};
export default cryptoAPI;
