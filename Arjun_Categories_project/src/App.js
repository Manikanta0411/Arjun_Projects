import React, { useState } from "react";
import "./App.css";
import Fruits from "./components/Fruits/Fruits";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

const App = () => {
const fruitsSrcFolder = require.context('/Users/mohanabondada/Documents/Images/Fruits', false);
const animalsSrcFolder = require.context('/Users/mohanabondada/Documents/Images/Animals', false);
const vehiclesSrcFolder = require.context('/Users/mohanabondada/Documents/Images/Vehicles', false);
const publicPlacesSrcFolder = require.context('/Users/mohanabondada/Documents/Images/PublicPlaces', false);
const flowersSrcFolder = require.context('/Users/mohanabondada/Documents/Images/Flowers', false);
const vegetablesSrcFolder = require.context('/Users/mohanabondada/Documents/Images/Vegetables', false);
const objectsSrcFolder = require.context('/Users/mohanabondada/Documents/Images/Objects', false);
const colorsSrcFolder = require.context('/Users/mohanabondada/Documents/Images/Colors', false);
const shapesSrcFolder = require.context('/Users/mohanabondada/Documents/Images/Shapes', false);
const birdsSrcFolder = require.context('/Users/mohanabondada/Documents/Images/Birds', false);
const feelingsSrcFolder = require.context('/Users/mohanabondada/Documents/Images/Feelings', false);

  return (
    <div>
       <Router>
              {/* <NavBar className="Container-2"/> */}
              {/* <Home/> */}
              <div className="routes-container">
                <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Fruits" element={<Fruits folder={fruitsSrcFolder} type={"Fruits"}/>} />
                <Route path="/Vegetables" element={<Fruits folder={vegetablesSrcFolder} type={"Vegetables"}/>} />
                <Route path="/PublicPlaces" element={<Fruits folder={publicPlacesSrcFolder} type={"PublicPlaces"}/>} />
                <Route path="/Vehicles" element={<Fruits folder={vehiclesSrcFolder} type={"Vehicles"}/>} />
                <Route path="/Animals" element={<Fruits folder={animalsSrcFolder} type={"Animals"}/>} />
                <Route path="/Flowers" element={<Fruits folder={flowersSrcFolder} type={"Flowers"}/>} />
                <Route path="/Feelings" element={<Fruits folder={feelingsSrcFolder} type={"Feelings"}/>} />
                <Route path="/Birds" element={<Fruits folder={birdsSrcFolder} type={"Birds"}/>} />
                <Route path="/Shapes" element={<Fruits folder={shapesSrcFolder} type={"Shapes"}/>} />
                <Route path="/Colors" element={<Fruits folder={colorsSrcFolder} type={"Colors"}/>} />
                <Route path="/Objects" element={<Fruits folder={objectsSrcFolder} type={"Objects"}/>} />
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
