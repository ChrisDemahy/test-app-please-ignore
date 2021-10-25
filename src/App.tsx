import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CoinGeckoEvents from "./components/CoinGeckoEvents/CoinGeckoEvents";
import CoinPaprikaTwitter from "./components/CoinPaprikaTwitter/CoinPaprikaTwitter";
import CoinGeckoPrices from "./components/CoinGeckoPrices/CoinGeckoPrices";
function App() {
  return (
    <div className="App">
      <CoinGeckoEvents />
      <CoinPaprikaTwitter />
      <CoinGeckoPrices />
    </div>
  );
}

export default App;
