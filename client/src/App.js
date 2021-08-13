import React from "react";
//import "./styles/App.css";
import { Hikes } from "./components/Hikes";
import { MyMap } from "./components/maps/MyMap.js";
import { Form } from "./components/Form.js";
import hikes from './dummyHikes.json'
require("dotenv").config();

export default function App() {

  return (
    <div className ='app'>
      <div className="title-overlay">
        <img className="PMH-logo" 
          src="https://i.ibb.co/mBJ38W9/pin-my-hike-logo-trial.png"
        />
      </div>
      
      <div className="maps-container">
        <MyMap hikes={hikes} />
      
      </div>
      <Form location={"53.374378, -1.711401"} />
      <Hikes />  
    </div>
  );
}

