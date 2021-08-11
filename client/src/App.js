import { withScriptjs, withGoogleMap } from "react-google-maps";
import MyMap from './components/maps/MyMap'
const WrappedMap = withScriptjs(withGoogleMap(MyMap));
require('dotenv').config();
import React from "react";
import "./App.css";
import { Hikes } from './components/Hikes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="maps-container" 
        style={{
        width: '80vw', 
        height: '80vh',
        borderStyle: 'solid'}}>

        <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_MAPS_API_KEY
        }`} 
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        />
        </div>

  return (
    <div className="App">
      <Hikes />
    </div>

  );
}



export default App;