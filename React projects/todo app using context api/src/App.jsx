import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import CustomRoutes from "./routes/CustomRoutes";
import GlobalStateC from "./apis/GlobalState";

const App = () => {
  return (
    <GlobalStateC>
      <Router>
        <Navbar />
        <CustomRoutes />
      </Router>
    </GlobalStateC>
  );
};

export default App;
