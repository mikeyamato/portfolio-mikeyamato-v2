import React, { Component } from 'react';
import { Grid, Container, Button, Form } from 'semantic-ui-react';
import './Signup.css';

class Signup extends Component {
	constructor(){
		super();
		this.state = {
			nickname: '',
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
			nickname: this.state.nickname, 
			email: this.state.email,
			password: this.state.password,
			passwordConfirm: this.state.passwordConfirm
		}
		console.log(newUser)
	}

	render() {
		return (
			<div className='signup' >
				<div className='signup-overlay'>
					<Container>
						<div className='signup-title'>
							Signup
						</div>
						<Grid centered columns={2}>
							<Grid.Column>
								<Form onSubmit={this.onSubmit}>
									<Form.Field required>
										<label>Nickname</label>
										<input 
											type='text'
											placeholder='Nickname' 
											name='nickname'
											value={this.state.nickname} 
											onChange={this.onChange}
										/>
									</Form.Field>
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
									<Form.Field required>
										<label>Confirm Password</label>
										<input 
											type='password'
											placeholder='Confirm Password' 
											name='passwordConfirm'
											value={this.state.passwordConfirm} 
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

export default Signup; 