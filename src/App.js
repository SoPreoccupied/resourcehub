import React from "react";
//Have bootstap before App.css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ScrollButton from 'react-scroll-button'
import Home from './Components/Home.js';
import Favorites from './Components/Favorites.js';
import Contact from './Components/Contact.js';
import About from './Components/About.js';
// import SearchBar from'./Components/SearchBar.js';
import { useState, useEffect } from "react";
import {Route, Link, Routes, Navigate} from "react-router-dom";
import apiKey from './apiKey';


function App() {

  //Connecting google sheets API data to app.js
  const [resourcesListArray, setResourcesListArray] = useState ([]);
  //Takes indexes from spreadsheet to display the indexes of topic, description, and website text.
  const [favoritesArraySet, setFavoritesArraySet] = useState (new Set([3, 5, 6]));

  let localFavoritesArray = [];

  useEffect( () => {

    if (localStorage.getItem("favorites")) {
      console.log(localStorage.getItem("favorites"));
      localFavoritesArray = localStorage.getItem("favorites").split(",");
    }
  
    if (localFavoritesArray.length > 0) {
      setFavoritesArraySet(new Set(localFavoritesArray));
    }

  }, [])
  
  useEffect( () => {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/15fQuHfQCK_u-QWUcyqMSqqOl5p5JBR2C77wbMsC7WPk/values/Sheet1!A:I?key=${apiKey}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        setResourcesListArray(data.values)
    })
  },[])

  const handleAddFavorite = (favoritesIndex) => {
    const newFavoritesSet = new Set([...Array.from(favoritesArraySet), favoritesIndex]);
    localStorage.setItem("favorites", Array.from(newFavoritesSet));
    setFavoritesArraySet(newFavoritesSet);
    alert("Added to your Favorites!");
  }

  const handleRemoveFavorite =(favoritesIndex) => {
    const newFavoritesSet = new Set([...Array.from(favoritesArraySet)]);
    // console.log(newSet);
    newFavoritesSet.delete(favoritesIndex);
    // console.log(newSet);
    localStorage.setItem("favorites", Array.from(newFavoritesSet))
    setFavoritesArraySet(newFavoritesSet);
  }

  return (
    <div className="App" id="App">
      <header id="header">
        <head>
        <title>Resource Hub</title>
        </head>
        <nav>
          <ul>
            <li><Link to='/Home'>Home</Link></li>
            <li><Link to='/Favorites'>Favorites</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/Home' element={<Home addFavorite={handleAddFavorite} resourcesListArray={resourcesListArray}/>} />
          <Route path='/' element={<Navigate to='/Home' />} />
          <Route path='/Favorites' element={<Favorites removeFavorite={handleRemoveFavorite} resourcesListArray={resourcesListArray} favoritesArray={Array.from(favoritesArraySet)}/>} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
          <Route path='/resourcehub' element={<Navigate to='/Home' />} />
        </Routes>
      </main>
      <ScrollButton 
        targetId='App'
        behavior={'smooth'} 
        buttonBackgroundColor={'red'}
        iconType={'arrow-up'}
        style= {{fontSize: '24px', bottom: '48px'}}
      />
      <ScrollButton 
        targetId='footer'
        behavior={'smooth'} 
        buttonBackgroundColor={'red'}
        iconType={'arrow-up'}
        style= {{fontSize: '24px', transform: 'rotate(180deg)'}}
      />
      <footer id="footer"></footer>
    </div>
  );
}

export default App;