//This is the favorites page

import DisplayCard from "./DisplayCard";
import { useState } from "react";

const Favorites = (props) => {

const [currentSearch, setCurrentSearch] = useState("");

const handleSearchUpdate = (event) => {
  setCurrentSearch(event.target.value)
}

    // console.log(props);
    const componentsList = props.favoritesArray.map((value) => {
        const tableRow = props.resourcesListArray[value]
        
         //Filter for title  
         if (!tableRow[3].toLowerCase().includes(currentSearch.toLowerCase()) &&
         !tableRow[4].toLowerCase().includes(currentSearch.toLowerCase()) &&
         !tableRow[5].toLowerCase().includes(currentSearch.toLowerCase())){
             return;
         }
        
        return <DisplayCard cardIndex={value} handleButtonClick={props.removeFavorite} buttonText="Remove" topic={tableRow[3]} description={tableRow[4]} website={tableRow[5]} />
    })

    return (
        <div>

            <h1>Locally Tracked Resources.</h1>
            <form class="searchBar">
            <label for="site-search">
                <div id="magnifyingGlass">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </div>
            </label>
                <input
                    type="text"
                    id="site-search"
                    value={currentSearch}
                    onChange={handleSearchUpdate}
                    placeholder="Search"
                    // onChange={(e) => setName(e.target.value)}
                />
            </form>
            <section id="favoritedCards">
            {componentsList}
            </section>

        </div>
    )
}

export default Favorites;