import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  rightNavs = () => {
    return (
      <Menu.Menu position='right'>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <Segment basic>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='Episodes' />
          </Link>
          <Link to='/characters'>
            <Menu.Item name='Characters' />
          </Link>
          { this.rightNavs() }
        </Menu>
      </Segment>
    );
  }
}

export default NavBar;
