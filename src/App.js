import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContext from "./context/CartContext";
import "../src/components/MyComponent/MyComponent.css";
import Cart from "./components/Cart";
import { initializeApp } from "firebase/app";

export default function App() {
  initializeApp({
    apiKey: "AIzaSyAuFGcpbPlWaoV3N__VKy8ELFDx-e5ZgcQ",
    authDomain: "resistenza-ea5da.firebaseapp.com",
    projectId: "resistenza-ea5da",
    storageBucket: "resistenza-ea5da.appspot.com",
    messagingSenderId: "1027109591864",
    appId: "1:1027109591864:web:e9873e091d1b86ce153fcd",
  });

  return (
    <>
      <div className="container">
        <CartContext>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer greeting= "Bienvenidos a Resistenza Rossa" />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </CartContext>
      </div>
    </>
  );
}
