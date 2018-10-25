import React, { Component } from 'react';
import { Image, Button, Container, Responsive, Menu, Segment } from 'semantic-ui-react';
import './Navbar.css';

class Navbar extends Component {
	state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const { fixed } = this.state

    return (
      <div>
        <Menu
              fixed={fixed ? 'top' : null}
              // inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' className='navbar-logo-container'>
                  <Image src='https://i.imgur.com/Zg5gfZq.png' className='navbar-logo' />
                </Menu.Item>
                <Menu.Item as='a'>Home</Menu.Item>
                <Menu.Item as='a'>Portfolio</Menu.Item>
                <Menu.Item as='a'>Contact</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' 
                  // inverted={!fixed}
                  >
                    Log in
                  </Button>
                  <Button as='a' 
                  // inverted={!fixed} 
                  primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>


        {/* <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu> */}

        
      </div>
    )
  }
}

export default Navbar;