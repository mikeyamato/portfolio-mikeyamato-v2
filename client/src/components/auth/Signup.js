import React, { Component } from 'react';
import { Message, Grid, Container, Button, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';  // any react properties in a component should be mapped to PropTypes
import { connect } from 'react-redux';  // have this whenever we are using redux in a component
import { signupUser } from '../../actions/authActions' // import the action we want to use
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

	// get errors from our redux state, put it into props with `mapStateToProps`, then when we receive new properties and errors are included then we'll set it as the component state. this way we don't need to change anything within the jsx.  
	componentWillReceiveProps(nextProps){
		if(nextProps.errors){
			this.setState({errors: nextProps.errors});
		}
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
		// axios
		// 	.post('/api/users/signup', newUser)
		// 	.then(res => console.log(res.data))
		// 	.catch(err => this.setState({ errors: err.response.data }))

		this.props.signupUser(newUser)  // any action we bring in we call through props as it's stored there. `newUser` is the variable within `onSubmit`. 
	}

	render() {
		const { errors } = this.state;  // same as saying `const errors = this.state.errors`

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

// PropTypes are a pain in the ass but good practice
Signup.propTypes = {  // name of the component dot propTypes
	signupUser: PropTypes.func.isRequired,  // list all properties 
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

// to get state into our component a function needs to be run. 
const  mapStateToProps = (state) => ({
	auth: state.auth,  // putting auth state into a property call `auth` so that it can be accessed via `this.state.auth`. `state.auth` come from the root reducer. the `auth` key can be name anything. pull out items within render.
	errors: state.errors
});

export default connect(mapStateToProps, { signupUser })(Signup);   // 2nd connect parameter is where we map our actions. if we want to call `signupUser` we need to go to `onSubmit` at the top. if no mapStateToProps, then mark it as null. 