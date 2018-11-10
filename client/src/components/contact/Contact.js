import React, { Component } from 'react';
import { Grid, Form, Container, Input, Button } from 'semantic-ui-react';
import ConfettiTime from './Confetti';
import Konami from 'react-konami-code';
import Sound from 'react-sound';
import OneUp from '../common/OneUp';
import './Contact.css';

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
								<ConfettiTime run={runConfetti}/>
							</Konami>
						</Grid.Column>
					</Grid.Row>


					<Container>
						<Grid>
							<Grid.Row centered columns={2}>  {/* NOTE: to center, add one extra column */}
								<Grid.Column>
									<div className='contact-title'>
										Contact
									</div>
								</Grid.Column>
							</Grid.Row>
							{/* name */}
							<Grid.Row centered columns={2} >
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

export default Contact;
