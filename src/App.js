import React from "react";
//Have bootstap before App.css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from'./Components/Home.js';
import Favorites from'./Components/Favorites.js';
import Contact from'./Components/Contact.js';
import { useState, useEffect } from "react";
import {Route, Link, Routes, Navigate} from "react-router-dom";


function App() {

  //Connecting google sheets API data to app.js
  const [resourcesListArray, setResourcesListArray] = useState ([]);
  const [favoritesArraySet, setFavoritesArraySet] = useState (new Set([3, 4, 6]));

  useEffect( () => {
    fetch('https://sheets.googleapis.com/v4/spreadsheets/15fQuHfQCK_u-QWUcyqMSqqOl5p5JBR2C77wbMsC7WPk/values/Sheet1!A:I?key=AIzaSyBVj83yAUwYu60Co4bVIRgZca6lWV5xR2g')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        setResourcesListArray(data.values)
    })
  },[])

  const handleAddFavorite = (favoritesIndex) => {
    setFavoritesArraySet(new Set([...Array.from(favoritesArraySet), favoritesIndex]));
  }

  const handleRemoveFavorite =(favoritesIndex) => {
    const newSet = new Set([...Array.from(favoritesArraySet)]);
    console.log(newSet);
    newSet.delete(favoritesIndex);
    console.log(newSet);
    setFavoritesArraySet(newSet);
  }

  return (
    <div className="App">

      <nav>
        <ul>
          <li><Link to='/Home'>Home</Link></li>
          <li><Link to='/Favorites'>Favorites</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path='/Home' element={<Home addFavorite={handleAddFavorite} resourcesListArray={resourcesListArray}/>} />
          <Route path='/' element={<Navigate to='/Home' />} />
          <Route path='/Favorites' element={<Favorites removeFavorite={handleRemoveFavorite} resourcesListArray={resourcesListArray} favoritesArray={Array.from(favoritesArraySet)}/>} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </main>
      
    </div>
  );
}

export default App;
