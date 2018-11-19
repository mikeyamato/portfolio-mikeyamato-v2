import React, { Component } from 'react';
import { Grid, Container, List, Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './footer.css';

class Footer extends Component {
	render() {
		return (
			<Segment className='footer-position' inverted vertical > 
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row centered>
              {/* <Grid.Column width={3}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <List.Item as='a'>Home</List.Item>
                  <List.Item as='a'>Work</List.Item>
                  <List.Item as='a'>Contact</List.Item>
                </List>
              </Grid.Column> */}
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Sitemap' />
                <List link inverted>
                  <List.Item
                    as={Link}
                    to='/'
                  >
                    Home
                  </List.Item>
                  <List.Item 
                    as={Link}
                    to='/work'
                  >
                    Work
                  </List.Item>
                  <List.Item 
                    as={Link}
                    to='/contact'
                  >
                    Contact
                  </List.Item>
                </List>
              </Grid.Column>
              {/* <Grid.Column width={3}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  <List.Item as='a'>Banana Pre-Order</List.Item>
                  <List.Item as='a'>DNA FAQ</List.Item>
                  <List.Item as='a'>How To Access</List.Item>
                  <List.Item as='a'>Favorite X-Men</List.Item>
                </List>
              </Grid.Column> */}
              <Grid.Column width={4}>
                <Header as='h4' inverted>
                  Shinsuke Michael "Mike" Yamato
                </Header>
                
                <p>
                  Copyright &copy; {new Date().getFullYear()} Mike Yamato
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
		)
	}
}



export default Footer;