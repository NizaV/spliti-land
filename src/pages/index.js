import React from "react"
import { Link } from "gatsby"
import '../styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Typewriter from 'typewriter-effect';


export default function Home() { 
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
        {/* <TextRotator/> */}
        
        {/* <Typewriter
          options={{
            strings: ['UTILITIES', 'PHONE', 'NETFLIX', 'HULU', 'RENT', 'FOOD', 'DRINKS', 'TRIPS', 'FLIGHTS', 'MOVIES'],
            autoStart: true,
            loop: true,
            deleteSpeed: 1,
            cursor: '$',
            wrapperClassName: "text-rotator",
          }}
        /> */}
        <div className="text-rotator">
        <Typewriter
            // onInit={(typewriter) => {
            //   typewriter.changeCursor('$')
            //   .typeString('UTILITIES')
            //   .pauseFor(300)
            //   .deleteAll()
            //   .start()
            //   .typeString('PHONE')
            //   .pauseFor(300)
            //   .deleteAll()
            //   .typeString('NETFLIX')
            //   .pauseFor(300)
            //   .deleteAll();
            // }}
            options={{
              strings: ['UTILITIES', 'PHONE', 'NETFLIX', 'HULU', 'RENT', 'FOOD', 'DRINKS', 'TRIPS', 'FLIGHTS', 'MOVIES'],
              autoStart: true,
              loop: true,
              deleteSpeed: 1,
              cursor: null,
              wrapperClassName: "text-rotator",
            }}
          />
        </div>
      
        </div>
        <input className="email"></input>
        <Link to="/word/">
          <button className="access">
             <p className="access-text"> {"Get Early Access"} </p>
            </button>
        </Link>
        <div className="samsung">

        </div>
    </div>
  </div>
  
}
