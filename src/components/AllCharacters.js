import React from 'react'
import axios from 'axios'
import { Card, Image } from 'semantic-ui-react'

const BASE_URL = 'https://api.got.show/api'

/*
characters have:
_id
books
house
imageLink
titles
*/

class AllCharacters extends React.Component {
  state = { characters: [] }

  componentDidMount() {
    axios.get(`${BASE_URL}/characters`)
      .then( res => this.setState({ characters: res.data }) )
  }

  render() {
    const { characters } = this.state
    return(
      <Card.Group>
        {
          characters.map( char => {
            return(
              <Card key={char._id}>
                <Card.Header>
                  {char.name}
                </Card.Header>
                <Image src={`https://api.got.show${char.imageLink}`} />
              </Card>
            )
          })
        }
      </Card.Group>
    )
  }
}

export default AllCharacters
