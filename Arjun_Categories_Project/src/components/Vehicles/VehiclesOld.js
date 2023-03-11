import React, { useEffect, useState } from "react";
import { Image, Button } from 'antd';
import { Link } from "react-router-dom";

const Vehicles = () => {

let fruitsAndVegetables = ["Apple", "Banana", "Grapes", "Mango", "Orange", "Papaya", "Watermelon", "Guava", "PineApple"];
// let fruitsAndVegetables = ["Apple", "Banana", "Grapes", "Mango", "Orange", "Papaya", "Watermelon", "Guava", "PineApple", "Onion", "Tomato", "Potato", "Capsicum", "Beetroot", "Cauliflower"];
let fruitsNames = ["Apple", "Banana", "Grapes", "Mango", "Orange", "Papaya", "Watermelon", "Guava", "PineApple"];
let vegetablesNames = ["Onion", "Tomato", "Potato", "Capsicum", "Beetroot", "Cauliflower"]
let vehicles = ["Bike", "Auto", "Car", "Bus", "Train"];

const [photo, setPhoto] = useState("Bike");
const [randomIndex, setRandomIndex] = useState();
const [imageChange, setImageChange] = useState(false);
let i = 0;

useEffect(()=>{
    setRandomIndex(Math.floor(Math.random() * 6));
    if(i < 5){
        i++;
    }else if(i >=0){
        i--;
    }
    // setRandomIndex(i);
}, [imageChange])

// function randomCard() {
//     let randomIndex = Math.floor(Math.random() * 15);
//       return fruitsAndVegetables[randomIndex];
//   }

const VehiclesButton = ()=>{
    setImageChange(imageChange == true ? false : true);
    
    setPhoto(vehicles[randomIndex])
    console.log(photo)
}

  return (
    <div>
    <Link
            to={"/Home"}
            style={{ color: "white" }}
          >
            {""}
          <button>Back</button>
          </Link>
    <div class="Container-1">
      <div className="text">
        <div><p><h1>Vehicles</h1></p></div>
    <div className="centered">
      {/* <img src={Apple} alt="Car Image"></img> */}
      {/* <img src={require(`../../Images/${photo}.png`).default} alt="Car Image" height={100} width={100}></img> */}
      {/* <Button onClick={fruitsButton()}>Fruits</Button> */}
      <br/><br/>
      <Image src={require(`../../Images/${photo}.png`).default} preview={false} height={200} width={200}></Image>
      &emsp;
      <Button onClick={VehiclesButton}>Next</Button>
      <br/>
      {/* <p>{photo}</p> */}
    </div>
    </div>
    </div>
    </div>
  );
};

export default Vehicles;


