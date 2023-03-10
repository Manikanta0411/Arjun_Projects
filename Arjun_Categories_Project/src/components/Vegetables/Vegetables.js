import React, { useEffect, useState } from "react";
import { Image, Button } from 'antd';
import { Link } from "react-router-dom";

const Vegetables = () => {

let fruitsAndVegetables = ["Apple", "Banana", "Grapes", "Mango", "Orange", "Papaya", "Watermelon", "Guava", "PineApple"];
// let fruitsAndVegetables = ["Apple", "Banana", "Grapes", "Mango", "Orange", "Papaya", "Watermelon", "Guava", "PineApple", "Onion", "Tomato", "Potato", "Capsicum", "Beetroot", "Cauliflower"];
let fruitsNames = ["Apple", "Banana", "Grapes", "Mango", "Orange", "Papaya", "Watermelon", "Guava", "PineApple"];
let vegetablesNames = ["Onion", "Tomato", "Potato", "Capsicum", "Beetroot", "Cauliflower"]
let vehicles = ["Bike", "Auto", "Car", "Bus", "Train"];

const [photo, setPhoto] = useState("Onion");
const [randomIndex, setRandomIndex] = useState();
const [fruitsIndex, setFruitsIndex] = useState(0);
const [imageChange, setImageChange] = useState(false);

useEffect(()=>{
    setRandomIndex(Math.floor(Math.random() * 9));

}, [imageChange])

// function randomCard() {
//     let randomIndex = Math.floor(Math.random() * 15);
//       return fruitsAndVegetables[randomIndex];
//   }
let i = 0;

useEffect(()=>{
    // setFruitsIndex(i);
    console.log("fruit index"+fruitsIndex)
    if(vegetablesNames.length > fruitsIndex+1){
        setFruitsIndex(fruitsIndex+1)
    }
    // else{
    //     setFruitsIndex(0)
    // }
},[imageChange])

const fruitsButton = ()=>{
    setImageChange(imageChange == true ? false : true);
    setPhoto(vegetablesNames[fruitsIndex])
    console.log(i);
}

  return (
      <div>
        <Link
                to={"/Home"}
                style={{ color: "white" }}
              >
                {""}
              <button className="back-button">Back</button>
              </Link>
    <div class="Container-1">
      <div className="text">
        <div><p><h1>Vegetables</h1></p></div>
    <div className="centered">
      <br/><br/>
      <Image src={require(`../../Images/${photo}.png`).default} preview={false} height={300} width={300} className="image"></Image>
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <Button className="next-button" onClick={fruitsButton}><b>Next</b></Button>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Vegetables;
