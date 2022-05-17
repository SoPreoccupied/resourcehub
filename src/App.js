import React from "react";
//Have bootstap before App.css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from'./Components/Home.js';
import Favorites from'./Components/Favorites.js';
import { useState, useEffect } from "react";
import {Route, Link, Routes, Navigate} from "react-router-dom";

function App() {

  //Connecting google sheets API data to app.js
  const [resourcesListArray, setResourcesListArray] = useState ([]);
  useEffect( () => {
    fetch('https://sheets.googleapis.com/v4/spreadsheets/15fQuHfQCK_u-QWUcyqMSqqOl5p5JBR2C77wbMsC7WPk/values/Sheet1!A:I?key=AIzaSyBVj83yAUwYu60Co4bVIRgZca6lWV5xR2g')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        setResourcesListArray(data.values)
    })
  },[])

  return (
    <div className="App">
      
      <nav>
        <ul>
          <li><Link to='/Home'>Home</Link></li>
          <li><Link to='/Favorites'>Favorites</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path='/Home' element={<Home resourcesListArray={resourcesListArray}/>} />
          <Route path='/Favorites' element={<Favorites />} />
          <Route path='/' element={<Navigate to='/Home' />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
