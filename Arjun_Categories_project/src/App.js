import React, { useState } from "react";
import "./App.css";
import Fruits from "./components/Fruits/Fruits";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./layouts/NavBar/NavBar";
import Vegetables from "./components/Vegetables/Vegetables";
import Vehicles from "./components/Vehicles/Vehicles";
import Animals from "./components/Animals/Animals";
import Home from "./components/Home/Home";
import Flowers from "./components/Flowers/Flowers";

const App = () => {
const fruitsSrcFolder = require.context('/Users/mohanabondada/Documents/Images/Fruits', false);

// console.log("Names>>..."+fruitsNames);
  return (
    <div>
       <Router>
              {/* <NavBar className="Container-2"/> */}
              {/* <Home/> */}
              <div className="routes-container">
                <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Fruits" element={<Fruits />} />
                <Route path="/Vegetables" element={<Vegetables />} />
                <Route path="/Vehicles" element={<Vehicles />} />
                <Route path="/Animals" element={<Animals />} />
                <Route path="/Flowers" element={<Flowers />} />
                </Routes>
                </div>
                </Router>
     <div className="App">
      {/* <img src={require('./Images/Car.png').default} alt="Car Image" height={200} width={200}></img> */}
    </div>
    {/* <Fruits /> */}
    </div>
  );
};

export default App;
