//This will be the home page
import DisplayCard from "./DisplayCard";

//map over rsouces list arroy for every map return display card configerued to arrays ietem)
const Home = (props) => {
    console.log(props.resourcesListArray);
    return (
        <div>
            <h1>Where in the web are my Resources?</h1>
            <DisplayCard />
        </div>

    )
}

export default Home;