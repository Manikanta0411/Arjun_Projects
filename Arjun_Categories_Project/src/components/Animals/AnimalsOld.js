import React, { useEffect, useState } from "react";
import { Image, Button } from 'antd';
import "./Animals.css";
import { Link } from "react-router-dom";

const Animals = () => {

let animals = ["Dog", "Cat", "Cow", "Sheep", "Horse"];

const [photo, setPhoto] = useState("Dog");
const [randomIndex, setRandomIndex] = useState();
const [imageChange, setImageChange] = useState(false);

useEffect(()=>{
    setRandomIndex(Math.floor(Math.random() * 6));
//    let i = 0;
//    i++;
//    setPhoto(animals[i]);
}, [imageChange])


const AnimalsButton = ()=>{
    setImageChange(imageChange == true ? false : true);
    setPhoto(animals[randomIndex])
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
        <div><p><h1>Animals</h1></p></div>
    <div className="centered">
      <br/><br/>
      <Image.PreviewGroup className= "padding">
          {/* {animals.map(ani =>  */}
      <Image src={require(`../../Images/${photo}.png`).default} preview={false} height={200} width={200}></Image>
            {/* )} */}
            &emsp;
      <Button onClick={AnimalsButton}>Next</Button>
      {/* <Image src={require(`../../Images/${photo}.png`).default} preview={false} height={200} width={200}></Image> */}
      <br/>
      </Image.PreviewGroup>
      {/* <p>{photo}</p> */}
    </div>
    </div>
    </div>
    </div>
  );
};

export default Animals;


