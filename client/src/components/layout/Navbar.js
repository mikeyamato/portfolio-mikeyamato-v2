import React, { Component } from 'react';
import { Image, Container, Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import './Navbar.css';


class Navbar extends Component {
	state = { 
    activeItem: 'home',
    // pathname: '/',  // remove after testing
  }

  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
    const { activeItem } = this.state;
    const { 
      location: {
        pathname 
      }
    } = this.props;
    
    // console.log('**** where?',  this.props.location.pathname)  
    // console.log('**** location', pathname)

    switch (pathname){
      case '/':
        if(activeItem !== 'home'){
          this.setState({ activeItem: 'home' })
        }
        break;
      case '/work':
        if(activeItem !== 'work'){
          this.setState({ activeItem: 'work' })
        }
        break;
      case '/contact':
        if(activeItem !== 'contact'){
          this.setState({ activeItem: 'contact' })
        }
        break;
    }
    
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
          <Link to='/'>
            <Menu.Item 
              className='navbar-logo-container'
              name='home' 
              // active={activeItem === 'home'}
              onClick={this.handleItemClick}
            >
                <Image src='https://i.imgur.com/3BC9U3k.png' className='navbar-logo' />
            </Menu.Item>
          </Link>
          <Link to='/'>
            <Menu.Item 
              // className='navbar-menu'
              name='home' 
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            >
                Home
            </Menu.Item>
          </Link>
          <Link to='/work'>
            <Menu.Item 
              // className='navbar-menu'
              name='work' 
              active={activeItem === 'work'}
              onClick={this.handleItemClick}
            >
              Work
            </Menu.Item>
          </Link>
          <Link to='/contact'>
            <Menu.Item 
              // className='navbar-menu'
              name='contact' 
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}
            >
              Contact
            </Menu.Item>
          </Link>
          <Link to='/payment'>
            <Menu.Item 
              // className='navbar-menu'
              name='payment' 
              active={activeItem === 'payment'}
              onClick={this.handleItemClick}
            >
              Payment
            </Menu.Item>
          </Link>
          <Link to='/resources'>
            <Menu.Item 
              // className='navbar-menu'
              name='resources' 
              active={activeItem === 'resources'}
              onClick={this.handleItemClick}
            >
              Resources
            </Menu.Item>
          </Link>
          <Menu.Menu position='right'>
          <Link className='nav-login-button' to='/login'>
            <Menu.Item 
              // className='navbar-menu'
              // position='right'
              name='login' 
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
            >
              Log in
            </Menu.Item>
          </Link>
          <Link className='nav-register-button navbar-menu' to='/signup'>
            <Menu.Item
              // className='navbar-menu'
              // as='a'
              name='signup' 
              active={activeItem === 'signup'}
              onClick={this.handleItemClick}
            >
              Sign Up
            </Menu.Item>
          </Link>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}

export default withRouter(Navbar);