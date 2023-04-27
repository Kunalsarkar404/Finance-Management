import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Resources/Sidebar/sidebar";
import Stocks from "./Resources/Investment/Stocks";
import Dashboard from "./Resources/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/stocks" element={<Stocks symbol="AAPL" />} />
      </Routes>
    </Router>
  );
}

export default App;
