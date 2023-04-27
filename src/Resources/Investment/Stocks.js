import React, { useEffect, useState } from "react";
import "./Stocks.css";
import relianceLogo from "./logos/reliance-logo.png";
import hdfcBankLogo from "./logos/hdfc-bank-logo.png";
import infosysLogo from "./logos/infosys-logo.png";
import tcsLogo from "./logos/tcs-logo.png";
import hindustanUnileverLogo from "./logos/hindustan-unilever-logo.png";
import bhartiAirtelLogo from "./logos/bharti-airtel-logo.png";
import itcLogo from "./logos/itc-logo.png";
import kotakMahindraBankLogo from "./logos/kotak-mahindra-bank-logo.png";
import axisBankLogo from "./logos/axis-bank-logo.png";
import sbiLogo from "./logos/sbi-logo.png";

const API_KEY = "JRLC6AONQLF465OF";

const stocksData = [
  { name: "Reliance Industries Ltd.", symbol: "RELIANCE", logo: relianceLogo },
  { name: "HDFC Bank Ltd.", symbol: "HDFCBANK", logo: hdfcBankLogo },
  { name: "Infosys Ltd.", symbol: "INFY", logo: infosysLogo },
  { name: "Tata Consultancy Services Ltd.", symbol: "TCS", logo: tcsLogo },
  {
    name: "Hindustan Unilever Ltd.",
    symbol: "HINDUNILVR",
    logo: hindustanUnileverLogo,
  },
  { name: "Bharti Airtel Ltd.", symbol: "BHARTIARTL", logo: bhartiAirtelLogo },
  { name: "ITC Ltd.", symbol: "ITC", logo: itcLogo },
  {
    name: "Kotak Mahindra Bank Ltd.",
    symbol: "KOTAKBANK",
    logo: kotakMahindraBankLogo,
  },
  { name: "Axis Bank Ltd.", symbol: "AXISBANK", logo: axisBankLogo },
  { name: "State Bank of India", symbol: "SBIN", logo: sbiLogo },
];

const Stocks = () => {
  const [stockPrices, setStockPrices] = useState({});

  useEffect(() => {
    const fetchPrices = async () => {
      const symbols = stocksData.map((stock) => stock.symbol).join(",");
      const response = await fetch(`https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=${symbols}&apikey=${API_KEY}`);
      const data = await response.json();
      const prices = data["Stock Quotes"].reduce((obj, quote) => {
        obj[quote["1. symbol"]] = parseFloat(quote["2. price"]).toFixed(2);
        return obj;
      }, {});
      setStockPrices(prices);
    };
    fetchPrices();
  }, []);

  const renderStocks = () => {
    return stocksData.map((stock) => (
      <div key={stock.symbol} className="stock-container">
        <div className="stock-logo">
          <img src={stock.logo} alt={`${stock.symbol} logo`} />
        </div>
        <button className="stock-btn">{stock.symbol}</button>
        <div className="stock-price">{stockPrices[stock.symbol]}</div>
      </div>
    ));
  };

  return <div className="stocks-container">{renderStocks()}</div>;
};

export default Stocks;
