import React, { useState } from "react";
import "./investment.css";
import "./bankaccount.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faFileInvoiceDollar,
  faMoneyCheck,
  faPiggyBank,
  faBuildingColumns,
  faCoins,
  faVault,
  faPlusCircle,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import Stocks from '../Investment/Stocks';
import Mutual from "../Investment/Mutual";

function BankAccount({ name, value }) {
  return (
    <div className="bank-account">
      <FontAwesomeIcon icon={faUniversity} className="bank-icon" />
      <p>{name}</p>
      <div className="value">₹{value}K</div>
    </div>
  );
}

export default function Dashboard() {
  const [buttons] = useState([
    {
      id: 1,
      label: "Stocks",
      value: 10,
      symbol: faChartLine,
      component: Stocks,
    },
    { id: 2, label: "Mutual Funds", value: 56, symbol: faFileInvoiceDollar, component: Mutual },
    { id: 3, label: "FD", value: 20, symbol: faMoneyCheck },
    { id: 4, label: "EPF", value: null, symbol: faPiggyBank },
    { id: 5, label: "Forex", value: null, symbol: faCoins },
    { id: 6, label: "Cryptocurrency", value: null, symbol: faBitcoin },
    { id: 7, label: "Commodity", value: null, symbol: faBuildingColumns },
    { id: 8, label: "PPF", value: null, symbol: faVault },
  ]);

  const [bankAccounts] = useState([
    { name: "SBI", value: 32 },
    { name: "ICICI", value: 1 },
    { name: "HDFC", value: 93 },
  ]);

  const totalValue = bankAccounts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.value,
    0
  );

  const totalInvestments = buttons.reduce(
    (accumulator, button) =>
      button.value !== null ? accumulator + button.value : accumulator,
    0
  );

  const handleClick = (button) => {
    if (button.component) {
      window.location.href = `/${button.label.toLowerCase()}`;
    }
  };

  return (
    <>
      <div className="dashboard">
        <div className="investment-section">
          <div className="total">My total investments ₹{totalInvestments}K</div>
          <div className="container">
            {buttons.map((button) => (
              <div
                className="button"
                key={button.id}
                onClick={() => handleClick(button)}
              >
                <FontAwesomeIcon icon={button.symbol} className="dash-icon" />
                <p>{button.label}</p>
                {button.value !== null ? (
                  <span className="value">₹{button.value}K</span>
                ) : (
                  <FontAwesomeIcon icon={faPlusCircle} className="add-icon" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bank-dashboard">
        <div className="bank-accounts-header">
          <div className="total">Total Bank Balance: ₹{totalValue}K</div>
          <div className="accounts">Bank Accounts: {bankAccounts.length}</div>
        </div>
        <div className="bank-button">
          {bankAccounts.map((account, index) => (
            <BankAccount
              name={account.name}
              value={account.value}
              className="bank-account"
            />
          ))}

          <div className="bank-account">
            <FontAwesomeIcon icon={faPlusCircle} className="add-icon" />
          </div>
        </div>
      </div>
    </>
  );
}
