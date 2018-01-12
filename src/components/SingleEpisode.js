import React from 'react'
import axios from 'axios'
import { Header, Table, Grid, List } from 'semantic-ui-react'

//56fa9944b528554c6493b7b1

const BASE_URL = 'https://api.got.show/api'

class SingleEpisode extends React.Component {
  state = { episode: {} }

  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`${BASE_URL}/episodes/byId/${id}`)
      .then( res => this.setState({ episode: res.data.data }) )
      .catch( err => console.log(err) )
  }

  render() {
    const { episode } = this.state
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={4}>
            <Table basic='very' celled collapsing>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Header as='h4'>
                      <Header.Content>
                        Title
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>
                    {episode.name}
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>
                    <Header as='h4'>
                      <Header.Content>
                        Season
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>
                    {episode.season}
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>
                    <Header as='h4'>
                      <Header.Content>
                          Episode
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>
                    {episode.nr}
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>
                    <Header as='h4'>
                      <Header.Content>
                        Director
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>
                    {episode.director}
                  </Table.Cell>
                </Table.Row>
                { episode.predecessor &&
                  <Table.Row>
                    <Table.Cell>
                      <Header as='h4'>
                        <Header.Content>
                          Last Episode
                        </Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>
                      {episode.predecessor}
                    </Table.Cell>
                  </Table.Row>
                }
                { episode.successor &&
                  <Table.Row>
                    <Table.Cell>
                      <Header as='h4'>
                        <Header.Content>
                          Next Episode
                        </Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>
                      {episode.successor}
                    </Table.Cell>
                  </Table.Row>
                }
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={10} textAlign='center'>
            <Header as='h2'>Characters in This Episode</Header>
            <List size='large' relaxed>
              { episode.characters &&
                episode.characters.map( (char, i) => {
                  return <List.Item key={i}>{char}</List.Item>
                })
              }
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
export default SingleEpisode
