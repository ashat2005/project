import React from "react";
import Header from './components/header/Header'
// import Content from "./components/products/Content";
import CheckDb from "./components/footer/CheckDb";
import SimpleSlider from "./components/slick/slick"
// import Dispetcher from "./components/dispetcher/Dispetcher"
const App = ()=>{
   return (
      <div>
         <Header />
         <SimpleSlider/>
         <CheckDb/>
         {/* <Dispetcher/> */}

      </div>
      )
}

export default App