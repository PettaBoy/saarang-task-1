import React from "react";
import FirstPage from './initPage.js';
import PurchasePage from './tshirtPage.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/purchase" element={<PurchasePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
