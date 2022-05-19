//This is the home page

import DisplayCard from "./DisplayCard";

//For every item, return display card 
//Map over Topic, Description, Website(for now); Indexes 3,4,5(for now) in resourcesListArray
const Home = (props) => {
    const displayCardList = props.resourcesListArray.map( (value, index) => {
        if(index === 0) {
            return;
        }
        return <DisplayCard cardIndex={index} handleButtonClick={props.addFavorite} buttonText="Add" topic={value[3]} description={value[4]} website={value[5]}/>
    })
    
    return (
        <div>
            
            <h1>Where in the web are our Resources?</h1>
            <section id="cards">
            {displayCardList}
            </section>

        </div>
    )
}

export default Home;