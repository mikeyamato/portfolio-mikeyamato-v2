import React, { Component } from 'react';
import { Button, Modal, Header, Container, Card, Icon, Image, Grid, Divider } from 'semantic-ui-react';
import './Work.css';

class Work extends Component {


	render() {
		// const { open, dimmer } = this.state

		return (
			<div className='work'>
				<div className='work-overlay'>
					<Container>
						<Grid>
						<Grid.Row centered columns={2}>  {/* NOTE: to center, add one extra column */}
      				<Grid.Column>
						<div className='work-title'>
							Work
						</div>
							</Grid.Column>
						</Grid.Row>
						{/* // TODO: optimize this so I'm creating 1 component but then only updating images and href */}
						<Grid.Row centered columns={4}>
      			<Grid.Column>
						<Modal trigger={
							<Card>
								<Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
								<Card.Content>
									<Card.Header>Matthew</Card.Header>
									<Card.Meta>
										<span className='date'>Joined in 2015</span>
									</Card.Meta>
									<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
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
						</Grid.Column>
						
						
						<Grid.Column>
						<Modal trigger={
							<Card>
								<Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
								<Card.Content>
									<Card.Header>Matthew</Card.Header>
									<Card.Meta>
										<span className='date'>Joined in 2015</span>
									</Card.Meta>
									<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
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
						</Grid.Column>


						<Grid.Column>
						<Modal trigger={
							<Card>
								<Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
								<Card.Content>
									<Card.Header>Matthew</Card.Header>
									<Card.Meta>
										<span className='date'>Joined in 2015</span>
									</Card.Meta>
									<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
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
						</Grid.Column>

						</Grid.Row>

						{/* second row */}

						<Grid.Row centered columns={4}>
      			<Grid.Column>
						<Modal trigger={
							<Card>
								<Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
								<Card.Content>
									<Card.Header>Matthew</Card.Header>
									<Card.Meta>
										<span className='date'>Joined in 2015</span>
									</Card.Meta>
									<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
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
						</Grid.Column>
						
						
						<Grid.Column>
						<Modal trigger={
							<Card>
								<Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
								<Card.Content>
									<Card.Header>Matthew</Card.Header>
									<Card.Meta>
										<span className='date'>Joined in 2015</span>
									</Card.Meta>
									<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
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
						</Grid.Column>


						<Grid.Column>
						<Modal trigger={
							<Card>
								<Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
								<Card.Content>
									<Card.Header>Matthew</Card.Header>
									<Card.Meta>
										<span className='date'>Joined in 2015</span>
									</Card.Meta>
									<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
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
						</Grid.Column>

						</Grid.Row>
						</Grid>
						
						{/* // TODO: optimize this so I'm creating 1 component but then only updating images and href */}
						<Divider horizontal className='work-divider'>
							Technologies
						</Divider>
						<Grid verticalAlign='middle' centered columns={6} >
						<Grid.Row >
						<Grid.Column>
						<Image 
							src={require('../../assets/logos/react.svg')}
							size='small' 
							name='react'
							// circular 
							href='https://reactjs.org/'  
							rel="noopener noreferrer" 
							target="_blank"
							className='work-images'
						/>
						</Grid.Column>
						<Grid.Column>
						<Image 
							src={require('../../assets/logos/jwt.png')} 
							size='small' 
							name='jwt'
							// circular 
							href='https://jwt.io/'  
							rel="noopener noreferrer" 
							target="_blank"
							className='work-images'
						/>
						</Grid.Column>
						<Grid.Column>
						<Image 
							src={require('../../assets/logos/mongodb.svg')} 
							size='medium' 
							name='mongo'
							// circular 
							href='https://www.mongodb.com/'  
							rel="noopener noreferrer"
							target="_blank"
							className='work-images'
						/>
						</Grid.Column>
						<Grid.Column>
						<Image 
							src={require('../../assets/logos/javascript.svg')} 
							size='small' 
							name='javascript'
							href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'  
							rel="noopener noreferrer"
							target="_blank"
							className='work-images'
						/>
						</Grid.Column>
						<Grid.Column>
						<Image 
							src={require('../../assets/logos/docker.svg')} 
							size='small' 
							name='docker'
							href='https://www.docker.com/'  
							rel="noopener noreferrer"
							target="_blank"
							className='work-images'
						/>
						</Grid.Column>
						</Grid.Row>

						<Grid.Row >
						<Grid.Column>
						<Image 
							src={require('../../assets/logos/nodejs-1.svg')}
							size='medium' 
							name='node'
							// circular 
							href='https://nodejs.org/'  
							rel="noopener noreferrer" 
							target="_blank"
							className='work-images'
						/>
						</Grid.Column>
						<Grid.Column>
						<Image 
							src={require('../../assets/logos/firebase-1.svg')} 
							size='small' 
							name='firebase'
							// circular 
							href='https://firebase.google.com/'  
							rel="noopener noreferrer" 
							target="_blank"
							className='work-images'
						/>
						</Grid.Column>
						<Grid.Column>
						<Image 
							src={require('../../assets/logos/html5.svg')} 
							size='small' 
							name='html'
							// circular 
							href='https://www.w3.org/html/'  
							rel="noopener noreferrer"
							target="_blank"
							className='work-images'
						/>
						</Grid.Column>
						<Grid.Column>
						<Image 
							src={require('../../assets/logos/css-3.svg')} 
							size='small' 
							name='css'
							href='https://www.w3.org/Style/CSS/'  
							rel="noopener noreferrer"
							target="_blank"
							className='work-images'
						/>
						</Grid.Column>
						<Grid.Column>
						<Image 
							src={require('../../assets/logos/python-4.svg')} 
							size='medium' 
							name='python'
							href='https://www.python.org/'  
							rel="noopener noreferrer"
							target="_blank"
							className='work-images'
						/>
						</Grid.Column>
						</Grid.Row>

						<Grid.Row >
						<Grid.Column>
						<Image 
							src={require('../../assets/logos/git-icon.svg')}
							size='medium' 
							name='git'
							href='https://git-scm.com/'  
							rel="noopener noreferrer" 
							target="_blank"
							className='work-images'
						/>
						</Grid.Column>
						<Grid.Column>
						<Image 
							src={require('../../assets/logos/redux.svg')} 
							size='small' 
							name='redux'
							href='https://redux.js.org/'  
							rel="noopener noreferrer" 
							target="_blank"
							className='work-images'
						/>
						</Grid.Column>
						<Grid.Column>
						<Image 
							src={require('../../assets/logos/jquery.svg')} 
							size='medium' 
							name='jquery'
							// circular 
							href='https://jquery.com/'  
							rel="noopener noreferrer"
							target="_blank"
							className='work-images'
						/>
						</Grid.Column>
						<Grid.Column>
						<Image 
							src={require('../../assets/logos/plivo.svg')} 
							size='medium' 
							name='plivo'
							href='https://www.plivo.com/'  
							rel="noopener noreferrer"
							target="_blank"
							className='work-images'
						/>
						</Grid.Column>
						<Grid.Column>
						<Image 
							src={require('../../assets/logos/heroku-1.svg')} 
							size='medium' 
							name='heroku'
							href='https://www.heroku.com/'  
							rel="noopener noreferrer"
							target="_blank"
							className='work-images'
						/>
						</Grid.Column>
						</Grid.Row>

						<Grid.Row >
						<Grid.Column>
						<Image 
							src={require('../../assets/logos/express-109.svg')}
							size='medium' 
							name='express'
							// circular 
							href='https://expressjs.com/'  
							rel="noopener noreferrer" 
							target="_blank"
							className='work-images'
						/>
						</Grid.Column>
						</Grid.Row>
					</Grid>
					</Container>
				</div>
			</div>
		)
	}
}

export default Work;
