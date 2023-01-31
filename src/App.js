import React from "react";
import { Routes, Route } from 'react-router-dom'

import { Header } from "./components/Header";
import { FullItem } from "./components/FullItem";
import { Home } from "./pages/Home";
import { useSelector } from "react-redux";


function App() {
  const items = useSelector(state => state.home.items)
  

  return (
    <div className="wrapper">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/item/:id/:elementId" element={<FullItem {...items} />}/>
      </Routes>
    </div>
  );
}

export default App;
