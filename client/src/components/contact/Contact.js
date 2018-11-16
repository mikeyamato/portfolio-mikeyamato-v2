import React, { Component } from 'react';
import { Grid, Form, Container, Input, Button, Divider, Segment, List, Modal, Image, Header, Icon, Embed } from 'semantic-ui-react';
import ConfettiTime from './Confetti';
import Konami from 'react-konami-code';
import Sound from 'react-sound';
import OneUp from '../common/OneUp';
import './Contact.css';
import sizeMe from 'react-sizeme';


class Contact extends Component {

	state = {
		fname: '',
		lname: '',
		email: '',
		areaCode: '',
		centralOfficeCode: '',
		lineNumber: '',
		message: '',
		active: '',
		sound: Sound.status.STOPPED,
		runConfetti: false,
	}

	oneUp = this.oneUp.bind(this);

	onChange = (e) => {
		this.setState({ [e.target.name] : e.target.value })
		// console.log(e.target.value)
	}

	onSubmit = (e) => {
		e.preventDefault();

		const user = {
			fname: this.state.fname,
			lname: this.state.lname,
			email: this.state.email,
			areaCode: this.state.areaCode,
			centralOfficeCode: this.state.centralOfficeCode,
			lineNumber: this.state.lineNumber,
			message: this.state.message
		}
		console.log(user)
	}

	oneUp() {
		// console.log('this got called')
		this.setState({ 
			sound: Sound.status.PLAYING,
			runConfetti: true,
		})
	}

	componentDidUpdate() {
		if (this.state.sound === Sound.status.PLAYING) {
			setTimeout(()=>{
				this.setState({ sound: Sound.status.STOPPED  })
				console.log('sound updated')
			}, 1000)
		}
		else if (this.state.runConfetti === true) {
			setTimeout(()=>{
				this.setState({ runConfetti: false })
				console.log('confetti updated')
			}, 11000)
		}
	}

	render() {
		const { runConfetti, sound } = this.state;
		const { width, height } = this.props.size

		return (
			<div className='contact'>
				<div className='contact-overlay'>
					
					{/* easter egg */}
					<Grid.Row centered columns={2}> 
						<Grid.Column>
							<Konami 
								timeout={10000}
								action={this.oneUp}
							>
								<OneUp playStatus={sound}/>
								<ConfettiTime run={runConfetti} width={width} height={height}/>
							</Konami>
						</Grid.Column>
					</Grid.Row>


					<Container>
						<Grid>
							<Grid.Row className='contact-grid' centered columns={2}>  {/* NOTE: to center, add one extra column */}
								<Grid.Column>
									<div className='contact-title'>
										CONTACT
									</div>
								</Grid.Column>
							</Grid.Row>
							
							<Grid.Row>
								<Grid.Column>
									<Header textAlign='center' className='contact-desc'>
										Te eum doming eirmod, nominati pertinacia argumentum ad his.
									</Header>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row centered columns={3} >
								<Divider vertical></Divider>
								<Grid.Column className='contact-left-column'>
									<Container className='contact-left-copy'>
										{/* <p>
											Te eum doming eirmod, nominati pertinacia argumentum ad his.
										</p> */}
										<List className='contact-list' >
											
													
													<List.Item>
														<List.Icon name='phone' />
														<List.Content verticalAlign='middle' >
															<a href='tel:17472157826' className='contact-list-content'>
																(747) 215-7826
															</a>
														</List.Content>
													</List.Item>
													<List.Item>
														<List.Icon name='mail' />
														<List.Content verticalAlign='middle' >
															<a href='mailto:mikeyamato@gmail.com' className='contact-list-content'>
																mikeyamto@gmail.com
															</a>
														</List.Content>
													</List.Item>
													<List.Item>
														<List.Icon name='github' />
														<List.Content verticalAlign='middle' >
															<a
																href='https://github.com/mikeyamato'  
																rel="noopener noreferrer" 
																target="_blank"
																className='contact-list-content'
															>
																GitHub
															</a>
														</List.Content>
													</List.Item>
													<List.Item>
														<List.Icon name='linkedin' />
														<List.Content verticalAlign='middle' >
															<a
																className='contact-list-content'
																href='https://www.linkedin.com/in/mikeyamato/'  
																rel="noopener noreferrer" 
																target="_blank"
															>
																LinkedIn
															</a>
														</List.Content>
													</List.Item>
													<List.Item>
														<List.Icon name='file alternate' />
														<List.Content verticalAlign='middle' className='contact-list-content'>

															<Modal dimmer={'blurring'} trigger={<a className='contact-list-content'>Résumé</a>} >
																<Modal.Content scrolling>
																	<Embed
																		defaultActive={true}
																		iframe={'https://docs.google.com/viewer?srcid=1N0NI3-Dxb5ac3qCgAYJm4Xx796XRZA-d&pid=explorer&efh=false&a=v&chrome=false&embedded=true'} className='contact-iframe'
																	/>
																	{/* NOTE: replace id (example: `1N0NI3-Dxb5ac3qCgAYJm4Xx796XRZA-d`) */}
																</Modal.Content>
															</Modal>
														</List.Content>
													</List.Item>
													
												
										</List>
										{/* <Segment color='grey' vertical className='contact-left-copy'>Pellentesque habitant morbi tristique senectus.</Segment>
										<Segment color='grey' vertical className='contact-left-copy'>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.</Segment> */}
									</Container>
								</Grid.Column>

								<Grid.Column>
									<Form onSubmit={this.onSubmit} >
										<Form.Group widths='equal' >
											<Form.Input
												required
												label='First Name'
												placeholder='first name'
												type='text'
												name='fname'
												value={this.state.fname}
												onChange={this.onChange}
											/>
											<Form.Input
												required
												label='Last Name' 
												placeholder='last name'
												type='text'
												name='lname'
												value={this.state.lname}
												onChange={this.onChange}
											/>
										</Form.Group>
										{/* email */}
										<Form.Group widths='equal' >
											<Form.Input
												required
												label='Email'
												placeholder='this@example.com'
												type='email'
												name='email'
												value={this.state.email}
												onChange={this.onChange}
											/>
										</Form.Group>
										{/* phone number */}
										<Form.Group widths='equal' className='contact-phone'>  {/* inline to align row */}
											<Form.Field required >
												<label>Phone Number</label>
												<Input 
													fluid 
													placeholder='area code' 
													type='tel'
													name='areaCode'
													value={this.state.areaCode}
													onChange={this.onChange}
												/>
											</Form.Field>
											<Form.Field required >
												<Input 
													fluid 
													placeholder='555' 
													type='tel'
													name='centralOfficeCode'
													value={this.state.centraOfficeCode}
													onChange={this.onChange}
												/>
											</Form.Field>
											<Form.Field required >
												<Input 
													fluid 
													placeholder='5555' 
													type='tel'
													name='lineNumber'
													value={this.state.lineNumber}
													onChange={this.onChange}
												/>
											</Form.Field>
										</Form.Group>
										{/* message */}
										<Form.Group widths='equal' >
											<Form.TextArea
												required 
												label='Message'
												placeholder='Leave a message...'
												type='text'
												name='message'
												value={this.state.message}
												onChange={this.onChange}
											/>
										</Form.Group>
										{/* button */}
										<Button 
											// fluid
											floated='right'
											type='submit'
											disabled={
												!this.state.fname ||
												!this.state.lname ||
												!this.state.email ||
												!this.state.areaCode ||
												!this.state.centralOfficeCode ||
												!this.state.lineNumber ||
												!this.state.message
											}
										>
											Submit
										</Button>
									</Form>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Container>
				</div>
			</div>
		)
	}
}

export default sizeMe({ monitorHeight: true })(Contact);  // `sizeMe({ monitorHeight: true })` required to calculate display size 
