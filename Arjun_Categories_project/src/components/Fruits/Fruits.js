import React, { useEffect, useState } from "react";
import { Image, Button } from 'antd';
import { CloseButton } from "react-bootstrap";
import { Route, Link, useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import {Howl, Howler} from "howler";

const Fruits = (props) => {
// const srcFolder = require.context('/Users/mohanabondada/Documents/Images/Fruits', false,/\.png$/);
// const srcFolder = require.context('/Users/mohanabondada/Documents/Images/Fruits', false);
const fileNames = props.folder.keys().map(key=>key.slice(2));
console.log(fileNames);
console.log("length..."+fileNames.length);
let newFileNames = fileNames.map(files=>files.split(".")[0])
console.log("new names..."+newFileNames)
let flowersNames = newFileNames;

const [photo, setPhoto] = useState(flowersNames[0]);
const [randomIndex, setRandomIndex] = useState();
const [fruitsIndex, setFruitsIndex] = useState(0);
const [imageChange, setImageChange] = useState(false);
const [showOptions, setShowOptions] = useState(false);
const [showName, setShowName] = useState(false);
const [playQuiz, setPlayQuiz] = useState(false);
const [option, setOption] = useState(1);
const [winsCount, setWinsCount] = useState(0);
const [lossesCount, setLossesCount] = useState(0);
const [buttonValue, setButtonValue] = useState();
const [gameResult, setGameResult] = useState("Let's Play...");
let navigate = useNavigate(); 

// console.log("flower names..."+flowersNames.length)

useEffect(()=>{
    setRandomIndex(Math.floor(Math.random() * flowersNames.length));
}, [imageChange])

// const swish = new Howl({
//     src: ["/swish.mp3"]
// })

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
    if(flowersNames.length > fruitsIndex+1){
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
    // swish.play();
    setImageChange(imageChange == true ? false : true);
    setPhoto(flowersNames[fruitsIndex])
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
    setWinsCount(winsCount+1);
    setTimeout(()=>{
        fruitsButton();
    },[500])
}else{
    // alert("Wrong Answer")
    wrongAnswer.play();
    setGameResult("You're Wrong, Try Again!");
    setLossesCount(lossesCount+1);
}
// alert("hi")
}
console.log("Button value..."+buttonValue);

const handleShowOptions=()=>{
  setShowName(false);
  setShowOptions(showOptions ? false : true);
}

const handlePlayQuiz=()=>{
  setPlayQuiz(playQuiz ? false : true);
}

const handleShowName=()=>{
  setShowOptions(false);
  setShowName(showName ? false : true);
}

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
        <button onClick={() => navigate(`/Home`)} className="back-button">
         Go Home
        </button>
      </div>
      <div class="Container-1">
        <div className="text">
          <div>
            <p>
              <h1>{props.type}</h1>
            </p>
          </div>
          {gameResult == "You're Wrong, Try Again!" ? (
            <div>
              {" "}
              <p type="text" style={{ color: "red" }}>
                <span>
                  <h2>{gameResult}</h2>
                </span>
              </p>
            </div>
          ) : (
            <div>
              {" "}
              <p type="text" style={{ color: "green" }}>
                <span>
                  <h2>{gameResult}</h2>
                </span>
              </p>
            </div>
          )}
          <div className="centered">
            {/* <img src={Apple} alt="Car Image"></img> */}
            {/* <img src={require(`../../Images/${photo}.png`).default} alt="Car Image" height={100} width={100}></img> */}
            {/* <Button onClick={fruitsButton()}>Fruits</Button> */}
            <br />
            <br />
            <Image
              src={
                require(`/Users/mohanabondada/Documents/Images/${props.type}/${photo}.png`)
                  .default
              }
              preview={false}
              height={400}
              width={400}
              className="image"
            ></Image>
           
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <Button className="next-button" onClick={fruitsButton}>
              <b>Next</b>
            </Button>
          </div>
         {playQuiz &&  <div class="flex-blackjack-row-3">
        <table style={{border: "1px solid black", justifyContent: "space-around"}}>
          <tr style={{border: "1px solid black"}}>
            <th style={{border: "1px solid black", width: "100px"}}>Wins</th>
            <th style={{border: "1px solid black"}}>Losses</th>
          </tr>
          <tr style={{border: "1px solid black"}}>
            <td style={{border: "1px solid black"}}><span id="wins">{winsCount}</span></td>
            <td style={{border: "1px solid black", width: "100px"}}><span id="losses">{lossesCount}</span></td>
          </tr>
        </table>
      </div>}
        </div>
      </div>
      {/* <br/> */}
      
      {showOptions && <div className="Container-1">
        {option == 1 ? (
          <button
            type="button"
            className="options"
            name="button1"
            onClick={(event) => onChangeHandler("button1", photo)}
          >
            {photo}
          </button>
        ) : (
          <Button
            className="options"
            name="button1"
            onClick={(event) =>
              onChangeHandler(
                "button1",
                flowersNames[randomIndex] == photo
                  ? flowersNames[randomIndex + 1]
                  : flowersNames[randomIndex]
              )
            }
          >
            {flowersNames[randomIndex] == photo
              ? flowersNames[randomIndex + 1]
              : flowersNames[randomIndex]}
          </Button>
        )}
        &emsp;
        {option == 1 ? (
          <Button
            className="options"
            name="button1"
            onClick={(event) =>
              onChangeHandler(
                "button1",
                flowersNames[randomIndex] == photo
                  ? flowersNames[randomIndex + 1]
                  : flowersNames[randomIndex]
              )
            }
          >
            {flowersNames[randomIndex] == photo
              ? flowersNames[randomIndex + 1]
              : flowersNames[randomIndex]}
          </Button>
        ) : (
          <Button
            className="options"
            name="button1"
            onClick={(event) => onChangeHandler("button1", photo)}
          >
            {photo}
          </Button>
        )}
      </div> }
     { showName && <div className="Container-1"><Button className="options">{photo}</Button> </div>}
     <Button onClick={handlePlayQuiz} style={{color: "White", background:"red"}}>{playQuiz ? "Hide quiz" : "Play Quiz"}</Button><br/><br/>
      <Button onClick={handleShowOptions} style={{color: "White", background:"red"}}>{showOptions ? "Hide Options" : "Show Options"}</Button><br/><br/>
      <Button onClick={handleShowName} style={{color: "White", background:"red"}}>{showName ? "Hide Name" : "Show Name"}</Button>
    </div>
  );
};

export default Fruits;
