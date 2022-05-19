//This page displays our reasources as cards

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

//Display card with Topic, Description, Website(for now); Indexes 3,4,5(for now) in resourcesListArray
const DisplayCard = (props) => {
    return (
        <div id="displayCard">

            <Card border="warning" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.topic}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <Card.Text><a href={props.website} target="_blank">{props.website}</a></Card.Text>
                    {/* Add Button */}
                    <Button onClick={ () => {
                        props.handleButtonClick(props.cardIndex)
                    }}variant="warning">{props.buttonText}</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default DisplayCard;