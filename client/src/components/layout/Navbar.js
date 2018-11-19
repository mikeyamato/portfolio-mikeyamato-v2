import React, { Component } from 'react';
import { Image, Container, Menu, Dropdown } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import './Navbar.css';


class Navbar extends Component {
	state = { 
    activeItem: 'home',
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
          <Menu.Item 
            as={Link}
            to='/'
            className='navbar-logo-container'
            name='home' 
            onClick={this.handleItemClick}
          >
              <Image src='https://i.imgur.com/3BC9U3k.png' className='navbar-logo' />
          </Menu.Item>
          <Menu.Item 
            as={Link}
            to='/'
            name='home' 
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
              Home
          </Menu.Item>
          <Menu.Item 
            as={Link}
            to='/work'
            name='work' 
            active={activeItem === 'work'}
            onClick={this.handleItemClick}
          >
            Work
          </Menu.Item>
          <Menu.Item 
            as={Link}
            to='/contact'
            name='contact' 
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
          >
            Contact
          </Menu.Item>
          <Menu.Item 
            as={Link}
            to='/payment'
            name='payment' 
            active={activeItem === 'payment'}
            onClick={this.handleItemClick}
          >
            Payment
          </Menu.Item>
          <Menu.Item 
            as={Link}
            to='/resources'
            name='resources' 
            active={activeItem === 'resources'}
            onClick={this.handleItemClick}
          >
            Resources
          </Menu.Item>
          <Menu.Menu position='right'>
            <Dropdown item={true} icon='user' basic={true}>
              <Dropdown.Menu>
                <Dropdown.Item 
                  as={Link}
                  to='/login'
                  name='login' 
                  active={activeItem === 'login'}
                  onClick={this.handleItemClick}
                  text='Login'
                  // className='navbar-dropdown-item'
                />
                <Dropdown.Item
                  as={Link}
                  to='/signup'
                  name='signup' 
                  active={activeItem === 'signup'}
                  onClick={this.handleItemClick}
                  text='Signup'
                />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}

export default withRouter(Navbar);


// https://github.com/Semantic-Org/Semantic-UI-React/issues/142