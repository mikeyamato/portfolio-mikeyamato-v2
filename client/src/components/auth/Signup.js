import React, { Component } from 'react';
import { Message, Grid, Container, Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { headShake } from 'react-animations'; // need styled-components as well
import './Signup.css';

class Signup extends Component {
	constructor(){
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			passwordConfirm: '',
			errors: {}
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e){
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e){
		e.preventDefault();

		const newUser = {
			name: this.state.name, 
			email: this.state.email,
			password: this.state.password,
			passwordConfirm: this.state.passwordConfirm
		};
		axios
			.post('/api/users/signup', newUser)
			.then(res => console.log(res.data))
			.catch(err => this.setState({ errors: err.response.data }))
	}

	render() {
		const { errors } = this.state;

		return (
			<div className='signup' >
				<div className='signup-overlay'>
					<Container>
						<div className='signup-title'>
							Signup
						</div>
						<Grid centered columns={2}>
							<Grid.Column>
								<Form noValidate onSubmit={this.onSubmit} error>
									<Form.Input required 
										label='Nickname'
										type='text'
										placeholder='nickname' 
										name='name'
										value={this.state.name} 
										onChange={this.onChange}
									/>
									{errors.name && (
										<Message
											error
											content={errors.name}
										/>
									)}
									<Form.Input required
										label='Email'
										type='email'
										placeholder='example@email.com' 
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
										placeholder='password' 
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
									<Form.Input required
										label='Confirm Password'
										type='password'
										placeholder='confirm password' 
										name='passwordConfirm'
										value={this.state.passwordConfirm} 
										onChange={this.onChange}
									/>
									{errors.passwordConfirm && (
										<Message
											error
											content={errors.passwordConfirm}
										/>
									)}
									<Button 
										type='submit'
										disabled={
											!this.state.name ||
											!this.state.email ||
											!this.state.password || 
											!this.state.passwordConfirm
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

export default Signup; 