import React from "react";
import { Link } from "gatsby"
// import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return <div>
    <div className="container">
      <h1 className="text-primary">Hello</h1>
      <Link to="/confirm">
        <button> Confirm</button>
      </Link>
    </div>
  </div>
}
