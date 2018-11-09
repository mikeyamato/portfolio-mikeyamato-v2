import React, { Component } from 'react';
import { Grid, Form, Container, Input, Button } from 'semantic-ui-react';
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
	}

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

	render() {
		return (
			<div className='contact'>
				<div className='contact-overlay'>
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
