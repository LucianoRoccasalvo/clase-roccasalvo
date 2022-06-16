import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemCount from "./components/ItemCount.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contacto from "./components/Contacto";

export default function App() {
  const onAdd = (count) => {
    console.log(count);
  };
  return (
  <>
    <div className="container">
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
    </BrowserRouter>
    </div>
  </>
);
}
