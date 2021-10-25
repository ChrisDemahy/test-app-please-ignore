import axios from "axios";
import React from "react";
import styles from "./CoinGeckoPrices.module.css";

interface Props {}
// you can choose annotate the return type so an error is raised if you accidentally return some other type
const CoinGeckoEvents = (props: Props): JSX.Element => {
  const [state, setState] = React.useState<any>(false);
  interface MarketData {
    symbol: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
  }
  async function fetchData() {
    let response = await axios({
      method: "GET",
      url: "https://coingecko.p.rapidapi.com/coins/markets",
      params: {
        vs_currency: "usd",
        price_change_percentage: "24H",
        page: "1",
        per_page: "100",
        order: "market_cap_desc",
      },
      headers: {
        "x-rapidapi-host": "coingecko.p.rapidapi.com",
        "x-rapidapi-key": "9d6d64d48dmsh56a7cd3df5b315ap180b67jsn5f6aa34f0119",
      },
    });

    let statusUpdates: MarketData[];

    const data: any = await response.data;
    statusUpdates = data;
    console.log(statusUpdates);
    // // const formattedData = data.status_updates.map( statusUpdate => ())
    setState(statusUpdates);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className={styles.hwrap}>
        <div className={styles.hmove}>
          {state ? (
            state.map((statusUpdate: MarketData) => (
              <div className={styles.hitem}>
                <img width="15px" alt="bitcoin-logo" src={statusUpdate.image} />
                {`${statusUpdate.symbol} ${statusUpdate.current_price}`}
                {statusUpdate.price_change_percentage_24h >= 0 ? (
                  <div style={{ color: "green" }}>
                    {statusUpdate.price_change_percentage_24h}
                  </div>
                ) : (
                  <div style={{ color: "red" }}>
                    {statusUpdate.price_change_percentage_24h}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className={styles.hitem}></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoinGeckoEvents;
