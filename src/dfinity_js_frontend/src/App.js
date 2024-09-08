import React, { useEffect, useCallback, useState } from "react";
import "./App.css";
import "./styles/tailwind.css";
import "./styles/font.css";
import "./index.css";

// src/dfinity_js_frontend/src/index.css
// import "./styles/font.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeLanding from "./pages/Home/HomeLanding";
import RoleSelection from "./pages/Home/RoleSelection";

const App = function AppWrapper() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLanding />} />
          <Route path="/role-selection" element={<RoleSelection />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
