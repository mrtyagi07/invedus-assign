import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import { StateContext } from "./context/StateContext";

function App() {
  return (
    <div>
      <StateContext>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="addcontact" element={<AddContact />} />
            <Route path="/editcontact" element={<EditContact />} />
          </Routes>
        </Router>
      </StateContext>
    </div>
  );
}

export default App;
