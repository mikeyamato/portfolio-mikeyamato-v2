import React, { Component } from 'react';
import { Message, Grid, Container, Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import './Login.css';

class Login extends Component {
	constructor(){
		super();
		this.state = {
			email: '',
			password: '',
			errors: {}
		}

		// this.onChange = this.onChange.bind(this);
		// this.onSubmit = this.onSubmit.bind(this);
	}

	onChange = (e) => {  // when using arrow notation, don't need to 'bind'
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmit = (e) => {
		e.preventDefault();

		const user = {
			email: this.state.email,
			password: this.state.password
		}
		axios
			.post('/api/users/login', user)
			.then(res => console.log(res.data))
			.catch(err => this.setState({ errors: err.response.data }))
	}

	render() {
		const { errors } = this.state;

		return (
			<div className='login'>
				<div className='login-overlay'>
					<Container>
						<Grid >
							<Grid.Row className='login-grid-row-title' centered columns={2}>
								<Grid.Column>
									<div className='login-title'>
										LOGIN
									</div>
								</Grid.Column>
							</Grid.Row>

							<Grid.Row centered columns={2} className='login-grid-form'>
								<Grid.Column>
									<Form noValidate onSubmit={this.onSubmit} error>
										<Form.Input required
											label='Email'
											type='email'
											placeholder='email' 
											name='email'
											value={this.state.email} 
											onChange={this.onChange}
										/>
										{errors.email && (
											<Message
												error
												content={errors.email}
											/>
										)}
										<Form.Input required
											label='Password'
											type='password'
											placeholder='Password' 
											name='password'
											value={this.state.password} 
											onChange={this.onChange}
										/>
										{errors.password && (
											<Message
												error
												content={errors.password}
											/>
										)}
										</Form>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row centered columns={2} verticalAlign='middle'>
								<Button 
									className='login-button'
									type='submit'
									disabled={
										!this.state.email ||
										!this.state.password
									}
								>
									Submit
								</Button>
							</Grid.Row>
						</Grid>
					</Container>
				</div>
			</div>
		)
	}
}

export default Login; 
