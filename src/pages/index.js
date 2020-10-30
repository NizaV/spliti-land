import React from "react"
import { Link } from "gatsby"
// import Apple from  "../images/apple-iphone-11.png"
import '../styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return <div className="main">
    <div className="container">
      <h1 className="text-primary">Hello</h1>
<div className="apple">
</div>
<div className="icon">

</div>
<div className="slogan">
  {"AN EASIER WAY TO SPLIT"}
</div>
<p className="slogan-child">{"Purchases appear directly in the app. Tag in your friends, let"}<span style={{fontWeight: '700'}}>{"Spliti"}</span>{"do the math or let your friends pay their own amounts. Try out"}<span style={{fontWeight: '700'}}>{"Autopilot"}</span>{", a hands free splitting experience for recurring splitting!"}</p>
<div className="samsung">

</div>
      <Link to="/confirm">
        <button> Confirm</button>
      </Link>
    </div>
  </div>
}
