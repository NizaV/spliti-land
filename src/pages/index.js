import React, {useEffect} from "react"
import '../styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Typewriter from 'typewriter-effect';
import Sent from './sent.js';

export default function Home() { 
  const [showSent, setShowSent] = React.useState(false)
   const handleClick = () => {
     setShowSent(true);
     setTimeout(() => setShowSent(false), 1300)};
    

  

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
            cursor: null,
            wrapperClassName: "text-rotator",
          }}
        />
       
      
        </div>
        <div>
          <input className="email"></input>
          <button className="access" id="myButton1" onClick={handleClick}  >
             <p className="access-text"> {"Get Early Access"} </p>
            </button>
            { showSent && <Sent />}
        </div>
        <div className="samsung">

        </div>
    </div>
  </div>
  
}
