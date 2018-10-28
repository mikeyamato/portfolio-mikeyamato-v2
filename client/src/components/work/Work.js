import React, { Component } from 'react';
import { Button, Modal, Header, Container, Card, Icon, Image } from 'semantic-ui-react';
import './Work.css';

class Work extends Component {

	// show = dimmer => () => this.setState({ dimmer, open: true })

	render() {
		// const { open, dimmer } = this.state

		return (
			<div className='work'>
				<div className='work-overlay'>
					<Container>
						<div className='work-title'>
							Work
						</div>

						{/* // TODO: optimize this so I'm creating 1 component but then only updating images and href */}
						
						<Modal trigger={
							<Card 
								header='Elliot Baker'
								meta='Friend'
								description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
							>
								<Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
								<Card.Content>
									<Card.Header>Matthew</Card.Header>
									<Card.Meta>
										<span className='date'>Joined in 2015</span>
									</Card.Meta>
									<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
								</Card.Content>
								<Card.Content extra>
									<a>
										<Icon name='user' />
										22 Friends
									</a>
								</Card.Content>
							</Card>
						} dimmer={'blurring'} >
							<Modal.Header>Select a Photo</Modal.Header>
							<Modal.Content image>
								<Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
								<Modal.Description>
									<Header>Default Profile Image</Header>
									<p>We've found the following gravatar image associated with your e-mail address.</p>
									<p>Is it okay to use this photo?</p>
								</Modal.Description>
							</Modal.Content>
							<Modal.Actions>
								<Button 
									color='violet' 
									href='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350'  
									rel="noopener noreferrer" 
									target="_blank"
								>
									Explore
								</Button>
							</Modal.Actions>
						</Modal>
						
						{/* // TODO: optimize this so I'm creating 1 component but then only updating images and href */}

						<Image 
							src='https://react.semantic-ui.com/images/wireframe/square-image.png' 
							size='medium' 
							name='react'
							circular 
							href='https://reactjs.org/'  
							rel="noopener noreferrer" 
							target="_blank"
							className='work-images'
						/>

						<Image 
							src='https://react.semantic-ui.com/images/wireframe/square-image.png' 
							size='medium' 
							name='mongo'
							circular 
							href='https://www.mongodb.com/'  
							rel="noopener noreferrer" 
							target="_blank"
							className='work-images'
						/>

						<Image 
							src='https://react.semantic-ui.com/images/wireframe/square-image.png' 
							size='medium' 
							name='mongo'
							circular 
							href='https://www.heroku.com/'  
							rel="noopener noreferrer"
							target="_blank"
							className='work-images'
						/>

					</Container>
				</div>
			</div>
		)
	}
}

export default Work;
