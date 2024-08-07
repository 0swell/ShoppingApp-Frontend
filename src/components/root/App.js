import { Container } from "reactstrap";
import React from "react";
import Dashboard from "./Dashboard";
import Navi from "../navi/Navi";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" elelment={<Dashboard />} />
          <Route path="/cart"  element={<CartDetail />}/>
        </Routes>
      </Container>
    </div>
  ); //   "/" anasayfam geldıgınde exact match olunca component olarak dashboardu ac
  // anasayfam dashboarddur
}

export default App;
