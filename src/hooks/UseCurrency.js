import { useEffect, useState } from "react";

function UseCurrency(currency) {
  const [currData, setCurrData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ghWUGfwVP7VaURxx99oyFkHU0BBEvf8MP6y77HeY&base_currency=${currency}`
        );
        const json = await res.json();

        setCurrData(json.data);
      } catch (e) {
        console.log("Error Fetching Data: ", e);
      }
    };

    fetchData();
  },[currency]);
  return currData;
}

export default UseCurrency;
