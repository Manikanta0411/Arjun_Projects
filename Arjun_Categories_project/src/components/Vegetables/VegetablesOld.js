import React, { useEffect, useState } from "react";
import { Image, Button } from 'antd';
import { Link } from "react-router-dom";

const Vegetables = () => {

let fruitsAndVegetables = ["Apple", "Banana", "Grapes", "Mango", "Orange", "Papaya", "Watermelon", "Guava", "PineApple"];
// let fruitsAndVegetables = ["Apple", "Banana", "Grapes", "Mango", "Orange", "Papaya", "Watermelon", "Guava", "PineApple", "Onion", "Tomato", "Potato", "Capsicum", "Beetroot", "Cauliflower"];
let fruitsNames = ["Apple", "Banana", "Grapes", "Mango", "Orange", "Papaya", "Watermelon", "Guava", "PineApple"];
let vegetablesNames = ["Onion", "Tomato", "Potato", "Capsicum", "Beetroot", "Cauliflower"]
const [photo, setPhoto] = useState("Onion");
const [randomIndex, setRandomIndex] = useState();
const [imageChange, setImageChange] = useState(false);

useEffect(()=>{
    setRandomIndex(Math.floor(Math.random() * 6));
}, [imageChange])

// function randomCard() {
//     let randomIndex = Math.floor(Math.random() * 15);
//       return fruitsAndVegetables[randomIndex];
//   }

const VegatablesButton = ()=>{
    setImageChange(imageChange == true ? false : true);
    setPhoto(vegetablesNames[randomIndex])
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
        <div><p><h1>Vegetables</h1></p></div>
    <div className="centered">
      {/* <img src={Apple} alt="Car Image"></img> */}
      {/* <img src={require(`../../Images/${photo}.png`).default} alt="Car Image" height={100} width={100}></img> */}
      {/* <Button onClick={fruitsButton()}>Fruits</Button> */}
      <br/><br/>
      <Image src={require(`../../Images/${photo}.png`).default} preview={false} height={200} width={200}></Image>
      &emsp;
      <Button onClick={VegatablesButton}>Next</Button>
      <br/>
      <p>{photo}</p>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Vegetables;


