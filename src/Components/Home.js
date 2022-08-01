//This is the home page

import DisplayCard from "./DisplayCard";
import { useState } from "react";

//For every item, return display card 
//Map over Topic, Description, Website(for now); Indexes 3,4,5(for now) in resourcesListArray

const Home = (props) => {

const [currentSearch, setCurrentSearch] = useState("");

const handleSearchUpdate = (event) => {
  setCurrentSearch(event.target.value)
}

    const displayCardList = props.resourcesListArray.map( (value, index) => {
        //Skips the first row (template card)
        if(index === 0) {
            return;
        }

        //Filter for title  
        if (!value[3].toLowerCase().includes(currentSearch.toLowerCase()) &&
        !value[4].toLowerCase().includes(currentSearch.toLowerCase()) &&
        !value[5].toLowerCase().includes(currentSearch.toLowerCase())){
            return;
        }

        return <DisplayCard cardIndex={index} handleButtonClick={props.addFavorite} buttonText="Add" topic={value[3]} description={value[4]} website={value[5]}/>
    })
    
    return (
        <div>
            
            <h1>Where in the web are our Resources?</h1>
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

            {/* create form with an input 
            for input link value to state variable 
            link on change to funtion that updates state variable with event.target.value of the on change function
            on change filter array using input state variable */}
            <section id="cards">
            {displayCardList}
            </section>

        </div>
    )
}

export default Home;