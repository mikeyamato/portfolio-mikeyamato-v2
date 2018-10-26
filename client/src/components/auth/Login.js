import React, { Component } from 'react';
import { Grid, Container, Button, Form } from 'semantic-ui-react';
import './Login.css';

class Login extends Component {
	constructor(){
		super();
		this.state = {
			email: '',
			password: ''
		}

		// this.onChange = this.onChange.bind(this);
		// this.onSubmit = this.onSubmit.bind(this);
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmit = (e) => {
		e.preventDefault();
		const user = {
			email: this.state.email,
			password: this.state.password
		}
		console.log(user);
	}

	render() {
		return (
			<div className='login'>
				<div className='login-overlay'>
					<Container>
						<div className='login-title'>
							Login
						</div>
						<Grid centered columns={2}>
							<Grid.Column>
								<Form onSubmit={this.onSubmit}>
									<Form.Field required>
										<label>Email</label>
										<input 
											type='email'
											placeholder='email' 
											name='email'
											value={this.state.email} 
											onChange={this.onChange}
										/>
									</Form.Field>
									<Form.Field required>
										<label>Password</label>
										<input 
											type='password'
											placeholder='Password' 
											name='password'
											value={this.state.password} 
											onChange={this.onChange}
										/>
									</Form.Field>
									<Button type='submit'>
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
