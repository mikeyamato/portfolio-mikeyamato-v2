import React, { Component } from 'react';
import { Image, Button, Container, Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
	state = { 
    activeItem: 'home',

  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu
        fixed='top'
        inverted
        pointing
        secondary
        size='large'
        className='navbar-menu'
      >
        <Container>
          <Menu.Item 
            className='navbar-logo-container'
            name='home' 
            // active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            <Link to='/'>
              <Image src='https://i.imgur.com/3BC9U3k.png' className='navbar-logo' />
            </Link>
          </Menu.Item>
          <Menu.Item 
            // className='navbar-menu'
            name='home' 
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            <Link to='/'>
              Home
            </Link>
          </Menu.Item>
          <Menu.Item 
            // className='navbar-menu'
            name='work' 
            active={activeItem === 'work'}
            onClick={this.handleItemClick}
          >
            <Link to='/work'>
              Work
            </Link>
            </Menu.Item>
          <Menu.Item 
            // className='navbar-menu'
            name='contact' 
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
          >
            <Link to='/contact'>
              Contact
            </Link>
          </Menu.Item>
          <Menu.Item 
            // className='navbar-menu'
            name='payment' 
            active={activeItem === 'payment'}
            onClick={this.handleItemClick}
          >
            <Link to='/payment'>
              Payment
            </Link>
          </Menu.Item>
          <Menu.Item 
            // className='navbar-menu'
            name='resources' 
            active={activeItem === 'resources'}
            onClick={this.handleItemClick}
          >
            <Link to='/resources'>
              Resources
            </Link>
          </Menu.Item>
          <Menu.Item 
            // className='navbar-menu'
            position='right'
            name='login' 
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          >
            <Link className='nav-login-button' to='/login'>
              Log in
            </Link>
          </Menu.Item>
          <Menu.Item
            // className='navbar-menu'
            // as='a'
            name='signup' 
            active={activeItem === 'signup'}
            onClick={this.handleItemClick}
          >
            <Link className='nav-register-button navbar-menu' to='/signup'>
              Sign Up
            </Link>
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default Navbar;