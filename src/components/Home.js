import React, { Component } from 'react'
import { Header, Card, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

/*
Episodes have:
name
season
nr (episode number in season)
totalNr (episode number for whole show)
predecessor
successor
characters (in episode, just names)
director
airDate
*/

const fakeEpisodes = [
  { name: 'ep1', season: 1, nr: 1, director: 'bob' },
  { name: 'ep2', season: 2, nr: 2, director: 'bob' },
  { name: 'ep3', season: 3, nr: 3, director: 'bob' },
  { name: 'ep4', season: 4, nr: 4, director: 'bob' },
  { name: 'ep5', season: 5, nr: 5, director: 'bob' },
]

const BASE_URL = 'https://api.got.show/api'

class Home extends Component {
  state = { episodes: [] }


  componentDidMount() {
    axios.get(`${BASE_URL}/episodes`)
      .then( res => this.setState({ episodes: res.data }) )
      .catch( err => console.log(err) )
    //this.setState({ episodes: fakeEpisodes })
  }

  render() {
    const { episodes } = this.state
    return (
      <Card.Group>
        {
          episodes.map( ep => {
            return (
              <Card as={Link} key={ep._id} to={`/episode/${ep._id}`}>
                <Card.Header textAlign='center'>
                  {ep.name}
                </Card.Header>
                <Card.Meta>
                </Card.Meta>
                <Card.Content textAlign='center'>
                  Season: {ep.season}
                  <Divider basic />
                  Episode: {ep.nr}
                  <Divider basic />
                  Directed By: {ep.director}
                </Card.Content>
              </Card>
            )
          })
        }
      </Card.Group>
    )
  }
}

export default Home
