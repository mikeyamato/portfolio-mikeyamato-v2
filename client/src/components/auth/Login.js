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
						<div className='login-title'>
							Login
						</div>
						<Grid centered columns={2}>
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
									<Button 
										type='submit'
										disabled={
											!this.state.email ||
											!this.state.password
										}
									>
										Submit
									</Button>
								</Form>
							</Grid.Column>
						</Grid>
					</Container>
				</div>
			</div>
		)
	}
}

export default Login; 
