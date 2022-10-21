import React from "react";
import Header from './components/header/Header';
import { Routes, Route } from "react-router-dom";
// import Content from "./components/products/Content";
import CheckDb from "./components/footer/CheckDb";
import SimpleSlider from "./components/slick/slick"
// import Dispetcher from "./components/dispetcher/Dispetcher"
const App = ()=>{
   return (
      <div>
         <Header />
         <Routes>
            <Route path="/macbook" />
            <Route path="/accessories"/>
            <Route path="/airpods"/>
            <Route path="/ipad"/>
            <Route path="/watch"/>
         </Routes>
         <SimpleSlider/>
         <CheckDb/>
         {/* <Dispetcher/> */}

      </div>
      )
}

export default App