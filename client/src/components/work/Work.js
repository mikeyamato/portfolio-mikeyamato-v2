import React, { Component } from 'react';
import { Button, Modal, Header, Container, Card, Image, Grid, Divider, Embed } from 'semantic-ui-react';
import Konami from 'react-konami-code';
import Sound from 'react-sound';
import OneUp from '../common/OneUp';
import './Work.css';

// next iteration, randomly pick a video

class Work extends Component {

	state = { 
		active: '',
		sound: Sound.status.STOPPED,
	}

	oneUp = this.oneUp.bind(this);

	oneUp() {
		// console.log('this got called')
		this.setState({ 
			sound: Sound.status.PLAYING,
			active: true
		})
	}

	componentDidUpdate() {
		if (this.state.sound === Sound.status.PLAYING) {
			setTimeout(()=>{
				this.setState({ sound: Sound.status.STOPPED  })
				console.log('component updated')
			}, 1000)
		}
	}

	// helps with having the page open at the top
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		const { active, sound } = this.state

		return (
			<div className='work'>
				<div className='work-overlay'>
					<Container>
						<Grid>

							{/* <Grid.Row centered columns={2}> 
								<Grid.Column>
									<Konami 
										timeout={10000}
										action={this.oneUp}
									>
										<OneUp playStatus={this.state.sound}/>
										<div className='work-title'>
											This is Hidden
										</div>
									</Konami>
								</Grid.Column>
							</Grid.Row> */}


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
										<Card fluid>
											<Image src='https://media.giphy.com/media/yNffnRFgaBtuDhllsT/giphy.gif' />
											<Card.Content>
												<Card.Header>Groupr</Card.Header>
												{/* <Card.Meta>
													<span className='date'>Joined in 2015</span>
												</Card.Meta> */}
												<Card.Description>Hub for high quality tech networking events. Built using the MERN stack.</Card.Description>
											</Card.Content>
										</Card>
									} dimmer={'blurring'} >
										<Modal.Header>Groupr</Modal.Header>
										<Modal.Content image>
											<Image size='large' src='https://media.giphy.com/media/yNffnRFgaBtuDhllsT/giphy.gif' />
											<Modal.Description className='work-modal-desc'>
												{/* <Header>Hub for high quality tech networking events. Built using the MERN stack.</Header> */}
												<p>Groupr connects technology companies with technical talent in your area. We understand that the hiring process can be difficult not only for recruiters, but also the candidates.</p>
												<p>We want to help engineers find amazing jobs, and help recruiters connect with candidates based on their technical abilities rather than their resume credentials.</p>
												<p>Every attendee has passed a rigorous coding challenge that is objective and standardized, which provides recruiters that all attendees have a strong baseline understanding of technology.</p>
											</Modal.Description>
										</Modal.Content>
										<Modal.Actions>
											<Button 
												color='violet' 
												href='https://github.com/ARKrew/groupr'  
												rel="noopener noreferrer" 
												target="_blank"
											>
												Visit Repository
											</Button>
										</Modal.Actions>
									</Modal>
								</Grid.Column>
							
							
								<Grid.Column>
									<Modal trigger={
										<Card fluid>
											<Image
												className='work-card-image-argo'
												size='tiny' 
												src={require('../../assets/screenshots/livedemo-argo.gif')} 
											/>
											<Card.Content>
												<Card.Header>ARgo</Card.Header>
												<Card.Description>Mobile AR Game for iOS. Where Pokemon Go meets geocaching.<br /></Card.Description>
											</Card.Content>
										</Card>
									} dimmer={'blurring'} >
										<Modal.Header>ARgo</Modal.Header>
										<Modal.Content image>
											<Image verticalAlign='middle' size='medium' src={require('../../assets/screenshots/livedemo-argo.gif')} />
											<Modal.Description className='work-modal-desc'>
												{/* <Header>Default Profile Image</Header> */}
												<p>ARgo is a mobile application that uses location intelligence and augmented reality to immerse users in a new experience. Users have the ability to enter into new worlds through AR portals and collect badges with their friends.</p> 
												<p>ARgo believes that life is about acquiring new experiences and we want to help.</p>
											</Modal.Description>
										</Modal.Content>
										<Modal.Actions>
											<Button 
												color='violet' 
												href='https://github.com/ARKrew/workingArgo'  
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
										<Card fluid>
											<Image src='https://media.giphy.com/media/yNffnRFgaBtuDhllsT/giphy.gif' />
											<Card.Content>
												<Card.Header>Devevloper Konnector</Card.Header>
												<Card.Description>A network made by a developer for developers.</Card.Description>
											</Card.Content>
										</Card>
									} dimmer={'blurring'} >
										<Modal.Header>Devevloper Konnector</Modal.Header>
										<Modal.Content image>
											<Image size='large' src='https://media.giphy.com/media/yNffnRFgaBtuDhllsT/giphy.gif' />
											<Modal.Description className='work-modal-desc'>
												{/* <Header>Default Profile Image</Header> */}
												<p>DevKonnector is a social platform for developers. Create profiles, add posts, and connect with other developers.</p>
											</Modal.Description>
										</Modal.Content>
										<Modal.Actions>
											<Button 
												color='violet' 
												href='https://github.com/mikeyamato/DevKonnector'  
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
										<Card fluid>
											<Image src='https://media.giphy.com/media/yNffnRFgaBtuDhllsT/giphy.gif' />
											<Card.Content>
												<Card.Header>Slackbot Fist-to-Five</Card.Header>
												<Card.Description>Fist to Five survey created for the popular Slack service.</Card.Description>
											</Card.Content>
										</Card>
									} dimmer={'blurring'} >
										<Modal.Header>Slackbot Fist-to-Five</Modal.Header>
										<Modal.Content image>
											<Image size='large' src='https://media.giphy.com/media/yNffnRFgaBtuDhllsT/giphy.gif' />
											<Modal.Description className='work-modal-desc'>
												{/* <Header>Default Profile Image</Header> */}
												<p>This oauth application was created to anonymously poll student in class using the fist-to-five technique and a custom Slack slash command.</p>
											</Modal.Description>
										</Modal.Content>
										<Modal.Actions>
											<Button 
												color='violet' 
												href='https://github.com/mikeyamato/slackbot-fist-to-five-oauth'  
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
										<Card fluid>
											<Image src='https://media.giphy.com/media/yNffnRFgaBtuDhllsT/giphy.gif' />
											<Card.Content>
												<Card.Header>Personality Insights</Card.Header>
												<Card.Description>Analyze social media for gift recommendations</Card.Description>
											</Card.Content>
										</Card>
									} dimmer={'blurring'} >
										<Modal.Header>GiftHub - Twitter/Watson Personality Insights</Modal.Header>
										<Modal.Content image>
											<Image size='large' src='https://media.giphy.com/media/yNffnRFgaBtuDhllsT/giphy.gif' />
											<Modal.Description className='work-modal-desc'>
												{/* <Header>Default Profile Image</Header> */}
												<p>Struggling to find the gifts for your friends and family? Use Gifthub to find the perfect gift!</p>
												<ul>
													<li>
														Analyze twitter feeds for gift recommendations based on IBM Watson's Personality Insights. Predict personality characteristics, needs and values through twitter feeds. Understand your loved ones habits and preferences on an individual level, and at scale.
													</li>
												</ul>
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
										<Card fluid>
											<Image src='https://media.giphy.com/media/yNffnRFgaBtuDhllsT/giphy.gif' />
											<Card.Content>
												<Card.Header>Slackbot Person Finder</Card.Header>
												<Card.Description>A Slack bot to select people randomly with a simple slash command</Card.Description>
											</Card.Content>
										</Card>
									} dimmer={'blurring'} >
										<Modal.Header>Slackbot Random Victim Finder</Modal.Header>
										<Modal.Content image>
											<Image size='large' src='https://media.giphy.com/media/yNffnRFgaBtuDhllsT/giphy.gif' />
											<Modal.Description className='work-modal-desc'>
												{/* <Header>Default Profile Image</Header> */}
												<p>This application was created to randomly select a student in class using a custom Slack slash command followed up with the class type.</p>
												<p>Chosen names will be removed from the database eliminating the possibilty of reselecting the same person.</p>
											</Modal.Description>
										</Modal.Content>
										<Modal.Actions>
											<Button 
												color='violet' 
												href='https://github.com/mikeyamato/slackbot-random-victim-finder'  
												rel="noopener noreferrer" 
												target="_blank"
											>
												Explore
											</Button>
										</Modal.Actions>
									</Modal>
								</Grid.Column>

							</Grid.Row>
							
							{/* easter egg */}
							<Grid.Row centered columns={2}> 
								<Grid.Column>
									<Konami 
										timeout={300000}
										action={this.oneUp}
									>
										<OneUp playStatus={sound}/>
										<Divider horizontal className='work-divider'>
											Easter Egg
										</Divider>
										<Embed 
											active={active} 
											id='FTQbiNvZqaY' 
											source='youtube' 
										/>
									</Konami>
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
