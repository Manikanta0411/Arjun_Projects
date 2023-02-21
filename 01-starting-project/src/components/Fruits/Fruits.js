import React, { useEffect, useState } from "react";
import { Image, Button } from 'antd';
import { CloseButton } from "react-bootstrap";
import { Route, Link, useNavigate } from "react-router-dom";
import Home from "../Home/Home";
// import Link from "antd/lib/typography/Link";
// import rightAnswer from "../../Sounds/goodJob.mp3";
// import swish from "../../Sounds/swish.mp3";
import {Howl, Howler} from "howler";

const Fruits = () => {

let fruitsAndVegetables = ["Apple", "Banana", "Grapes", "Mango", "Orange", "Papaya", "Watermelon", "Guava", "PineApple"];
// let fruitsAndVegetables = ["Apple", "Banana", "Grapes", "Mango", "Orange", "Papaya", "Watermelon", "Guava", "PineApple", "Onion", "Tomato", "Potato", "Capsicum", "Beetroot", "Cauliflower"];
let fruitsNames = ["Apple", "Banana", "Grapes", "Mango", "Orange", "Papaya", "Watermelon", "Guava", "PineApple"];
let vegetablesNames = ["Onion", "Tomato", "Potato", "Capsicum", "Beetroot", "Cauliflower"]
let numbers = [1,2];

const [photo, setPhoto] = useState("Apple");
const [randomIndex, setRandomIndex] = useState();
const [fruitsIndex, setFruitsIndex] = useState(0);
const [imageChange, setImageChange] = useState(false);
const [option, setOption] = useState(1);
const [buttonValue, setButtonValue] = useState();
const [gameResult, setGameResult] = useState("Let's Play...");
let navigate = useNavigate(); 

useEffect(()=>{
    setRandomIndex(Math.floor(Math.random() * 9));
    // hitSound.play();
}, [imageChange])

const swish = new Howl({
    src: ["/swish.mp3"]
})

const rightAnswer = new Howl({
    src: ["/goodJob.mp3"]
})

const wrongAnswer = new Howl({
    src: ["/tryAgain.mp3"]
})

const hitSound = new Audio('/public/swish.mp3');
// const rightAnswer = new Audio("../../Sounds/goodJob.mp3");

// function randomCard() {
//     let randomIndex = Math.floor(Math.random() * 15);
//       return fruitsAndVegetables[randomIndex];
//   }
let i = 0;

useEffect(()=>{
    setOption(Math.floor(Math.random() * 2));
    // setFruitsIndex(i);
    console.log("fruit index"+fruitsIndex)
    if(fruitsAndVegetables.length > fruitsIndex+1){
        setFruitsIndex(fruitsIndex+1)
    }
    
    // else{
    //     setFruitsIndex(0)
    // }
    // setOption(option == true ? false : true);

},[imageChange])

const fruitsButton = ()=>{
    // hitSound.play();
    setGameResult("Let's Play...");
    swish.play();
    setImageChange(imageChange == true ? false : true);
    setPhoto(fruitsAndVegetables[fruitsIndex])
    console.log(i);
}

const onChangeHandler = (name, value) => {
if(name == "button1"){
    setButtonValue(value);
}
if(value == photo){
    // alert("Right Answer")
    rightAnswer.play();
    setGameResult("You're Right...");
    setTimeout(()=>{
        fruitsButton();
    },[5000])
}else{
    // alert("Wrong Answer")
    wrongAnswer.play();
    setGameResult("You're Wrong, Try Again!");
}
// alert("hi")
}
console.log("Button value..."+buttonValue);

  return (
      <div>
        {/* <Link
                to={"/Home"}
                style={{ color: "white" }}
              >
                {""}
              <button className="back-button"> <b>&lt;Back</b> </button>
              </Link> */}
           <div>
              <button onClick={() => navigate(`/Home`)} className="back-button">Back</button></div>
    <div class="Container-1">
      <div className="text">
        <div><p><h1>Fruits</h1></p></div>
        {gameResult == "You're Wrong, Try Again!" ? <div> <p type="text" style={{color : "red"}}><span><h2>{gameResult}</h2></span></p></div> : <div> <p type="text" style={{color : "green"}}><span><h2>{gameResult}</h2></span></p></div>}
    <div className="centered">
      {/* <img src={Apple} alt="Car Image"></img> */}
      {/* <img src={require(`../../Images/${photo}.png`).default} alt="Car Image" height={100} width={100}></img> */}
      {/* <Button onClick={fruitsButton()}>Fruits</Button> */}
      <br/><br/>

      <Image src={require(`../../Images/${photo}.png`).default} preview={false} height={300} width={300} className="image"></Image>
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <Button className="next-button" onClick={fruitsButton}><b>Next</b></Button>
    </div>
    </div>
    </div>
  {/* <br/> */}
    <div className="Container-1">
     {option == 1 ?  <button type="button" className="options" name="button1" onClick={(event) => onChangeHandler("button1", photo)}>{photo}</button> : <Button className="options" name="button1" onClick={(event) => onChangeHandler("button1", fruitsAndVegetables[randomIndex] == photo ? fruitsAndVegetables[randomIndex+1] : fruitsAndVegetables[randomIndex])}>{fruitsAndVegetables[randomIndex] == photo ? fruitsAndVegetables[randomIndex+1] : fruitsAndVegetables[randomIndex]}</Button> }&emsp;
      {option == 1 ? <Button className="options" name="button1" onClick={(event) => onChangeHandler("button1", fruitsAndVegetables[randomIndex] == photo ? fruitsAndVegetables[randomIndex+1] : fruitsAndVegetables[randomIndex])}>{fruitsAndVegetables[randomIndex] == photo ? fruitsAndVegetables[randomIndex+1] : fruitsAndVegetables[randomIndex]}</Button> : <Button className="options" name="button1" onClick={(event) => onChangeHandler("button1", photo)}>{photo}</Button>}
      </div>
    </div>
  );
};

export default Fruits;
