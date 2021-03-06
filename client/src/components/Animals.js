import React from 'react';
import { Card, Header, } from 'semantic-ui-react';
import axios from "axios"

class Animals extends React.Component {
  state = { animals: [], };

  componentDidMount() {
    axios.get("/api/animals")
    .then( res => {
      this.setState({ animals: res.data, });
    })
  }

  renderAnimals = () => {
    const { animals, } = this.state;

    if (animals.length <= 0)
      return <h2>No Animals Yet</h2>
    return animals.map( animal => (
      <Card>
        <Card.Content>
          <Card.Header>{ animal.name }</Card.Header>
          <Card.Meta>{ animal.type }</Card.Meta>
          <Card.Description>
            { animal.description }
          </Card.Description>
        </Card.Content>
      </Card>
    ))
  }
  
  render() {
    return (
      <div>
      <Header as='h1'>Animals</Header>
      <br />
      <Card.Group>
        { this.renderAnimals() }
      </Card.Group>
    </div>
    )
  }
}

export default Animals;