//This is the favorites page

import DisplayCard from "./DisplayCard";

const Favorites = (props) => {
    console.log(props);
    const componentsList = props.favoritesArray.map((value, index, favoritesArrayCopy) => {
        const tableRow = props.resourcesListArray[value]
        return <DisplayCard cardIndex={value} handleButtonClick={props.removeFavorite} buttonText="Remove" topic={tableRow[3]} description={tableRow[4]} website={tableRow[5]} />
    })

    return (
        <div>
            <h1>Tracked Resources.</h1>
            <section id="favoritedCards">
            {componentsList}
            </section>
        </div>
    )
}

export default Favorites;
