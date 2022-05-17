import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

//Display card with Topic, Description, Website(for now); Indexes 3,4,5(for now) in resourcesListArray
const DisplayCard = (props) => {
    return (
        <div id="Card">
            <Card border="warning" style={{ width: '18rem' }}>
                <Card.Img variant="top" />
                <Card.Body>
                    <Card.Title>{props.topic}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <Card.Text>{props.website}</Card.Text>
                    <Button onClick={ () => {
                    window.open(props.website,"_blank")
                    }} variant="secondary">Go</Button>
                </Card.Body>
            </Card>
        </div>

    )
}

export default DisplayCard;