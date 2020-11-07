import React, {useState} from "react"
import { Link } from "gatsby"
import '../styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Typewriter from 'typewriter-effect';


export default function Home() { 
  const [color, setColor] = useState("#FF6E34");
  const [textColor, setTextColor] = useState("white");
  const [buttonText, setButtonText] = useState("Get Early Access")
  const handleClick = () => {
    setColor('white');
    setTextColor('#FF6E34');
    setButtonText('Sent');
  }
  const buttonStyle = {
    backgroundColor: color,
    color: textColor
  }
  return  <div className="main">
    <div className="container">
        <div className="apple">
        </div>
        <div className="icon">

        </div>
        <div className="slogan">
          {"AN EASIER WAY TO SPLIT"}
        </div>
        <p className="slogan-child">{"Purchases appear directly in the app. Tag in your friends, let"}<span style={{fontWeight: '700'}}>{" Spliti "}</span>{"do the math or let your friends pay their own amounts. Try out"}<span style={{fontWeight: '700'}}>{" Autopilot"}</span>{", a hands free splitting experience for recurring splitting!"}</p>
        <div className="container">
        
        <Typewriter
          options={{
            strings: ['UTILITIES', 'PHONE', 'NETFLIX', 'HULU', 'RENT', 'FOOD', 'DRINKS', 'TRIPS', 'FLIGHTS', 'MOVIES'],
            autoStart: true,
            loop: true,
            deleteSpeed: 1,
            delay: 50,
            wrapperClassName: "text-rotator",
          }}
        />
       
      
        </div>
        
        <input className="email"></input>
          <button className="access" id="myButton1" style={buttonStyle} onClick={handleClick}>
             <p className="access-text"> {buttonText} </p>
            </button>
        <div className="samsung">

        </div>
    </div>
  </div>
  
}
