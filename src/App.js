import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Resources/Sidebar/sidebar";
import Stocks from "./Resources/Investment/Stocks";
import Dashboard from "./Resources/Dashboard/Dashboard";
import Mutual from "./Resources/Investment/Mutual";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/mutual" element={<Mutual />} />
      </Routes>
    </Router>
  );
}

export default App;
