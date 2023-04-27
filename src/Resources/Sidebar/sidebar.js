import React from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShield,
  faMoneyBillTransfer,
  faFileInvoiceDollar,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";
export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="display">Menu</div>
      <nav className="sidebar-nav">
        <a href="/" className="sidebar-item">
          <FontAwesomeIcon icon={faShield} className="bar-icon" />
          <span>Dashboard</span>
        </a>
        <a href="/" className="sidebar-item">
          <FontAwesomeIcon icon={faShield} className="bar-icon" />
          <span>Reports</span>
        </a>
        <a href="/" className="sidebar-item">
          <FontAwesomeIcon icon={faMoneyBillTransfer} className="bar-icon" />
          <span>Transactions</span>
        </a>
        <a href="/" className="sidebar-item">
          <FontAwesomeIcon icon={faFileInvoiceDollar} className="bar-icon" />
          <span>Tax</span>
        </a>
        <a href="/" className="sidebar-item">
          <FontAwesomeIcon icon={faFilePen} className="bar-icon" />
          <span>Need Help?</span>
        </a>
      </nav>
    </div>
  );
}
