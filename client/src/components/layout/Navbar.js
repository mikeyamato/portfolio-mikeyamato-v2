import React, { Component } from 'react';
import { Image, Button, Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
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
                <Menu.Item className='navbar-logo-container'>
                  <Link to='/'>
                    <Image src='https://i.imgur.com/Zg5gfZq.png' className='navbar-logo' />
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to='/'>
                    Home
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to='/work'>
                    Work
                  </Link>
                  </Menu.Item>
                <Menu.Item>
                  <Link to='/contact'>
                    Contact
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to='/payment'>
                    Payment
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to='/resources'>
                    Resources
                  </Link>
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button>
                    <Link className='nav-login-button' to='/login'>
                      Log in
                    </Link>
                  </Button>
                  <Button primary={fixed} style={{ marginLeft: '0.5em' }}>
                    <Link className='nav-register-button' to='/signup'>
                      Sign Up
                    </Link>
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