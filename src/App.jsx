import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuPage from "./pages/MenuPage";

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/menu-layout" element={<MenuPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
