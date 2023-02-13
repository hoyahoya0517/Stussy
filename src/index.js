import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Collections from "./pages/Collections/Collections";
import Products from "./pages/Products/Products";
import Account from "./pages/Account/Account";
import User from "./pages/User/User";
import ScrollToTop from "./utils/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/*" element={<App />}>
        <Route index element={<Home />} />
        <Route path="collections/:cate" element={<Collections />} />
        <Route path="products/:id" element={<Products />} />
        <Route path="account" element={<Account />} />
        <Route path="user" element={<User />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
