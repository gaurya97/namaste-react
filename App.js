import React, { useRef } from "react";
import { ReactDOM } from "react-dom/client";
import { createRoot } from 'react-dom/client';
import { obj } from '../Mockdata';
import Header from './components/Header'
import Carts from './components/Carts'
import SearchBar from './components/SearchBar'
import ButtonTags from "./components/ButtonTags";
import { useState,useEffect,useContext } from "react";
import { ConterContext,CounterProvider } from "./context/CounterContext";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
// import Counter from "./components/Counter";
import Counter from "./components/counter";
import About from "./components/About";
import Home from "./components/Home";



// console.log(JSON.parse(JSON.stringify(obj)).cards);
// console.log(obj.cards)
// obj.cards.map((e)=>{
//   console.log(e.card.card.info.name);
//   console.log(e.card.card.info.cloudinaryImageId);
//   console.log(e.card.card.info.avgRatingString);
//   console.log(e.card.card.info.cuisines.join(", "));
//   console.log(e.card.card.info.sla.slaString);
// })

// const heading =React.createElement("h1",{id:"heading",stl:"gaurav"},"hello world from java script");
// const div =React.createElement("div",{id:"parent-div"},heading);
// console.log(document.getElementById('root'));
// const heading =(<div id="parent-div">
//     <h1 id="heading">hello world from jsx</h1>
     
//     <h1 id="heading">hello world from jsx2</h1>
//     </div>)




// 
   



const AppLaout =()=>{

  





    return (<>
    <div className="App">
    <Header/>
    <Outlet />
    
    </div>

    
    </>)
}

export default AppLaout;
