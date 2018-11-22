import React, { Component } from 'react';
import { 
	Grid, 
	Form, 
	Container, 
	Button, 
	Divider, 
	List, 
	Modal, 
	Header, 
	Embed, 
	Message,
	Icon
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { connect } from 'react-redux';
import { newContact } from '../../actions/contactActions';
import axios from 'axios';

import ConfettiTime from './Confetti';
import Konami from 'react-konami-code';
import Sound from 'react-sound';
import OneUp from '../common/OneUp';
import './Contact.css';
import sizeMe from 'react-sizeme';


class Contact extends Component {

	state = {
		disabled: true,
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

		const newContact = {
			fname: this.state.fname,
			lname: this.state.lname,
			email: this.state.email,
			areaCode: this.state.areaCode,
			centralOfficeCode: this.state.centralOfficeCode,
			lineNumber: this.state.lineNumber,
			message: this.state.message
		}
		// console.log(newContact)
		// axios.post('/api/contact/request', newContact)
		// 	console.log('**** this hits')
		// 	.then(res => console.log('*** good',res.data))
		// 	// .catch(err => console.log('*** bad 1', err))  // just spits out a generic error message
		// 	// .catch(err => console.log('*** bad 2', err.response.data))  // just spits out a generic error message
		// 	// .catch(err => console.log('*** bad 3', err.response.data.email))  // spits out the reason
		// 	.catch(err => this.setState({ errors: err.response.data }))  

		this.props.newContact(newContact, this.props.history);   // inside the parens `newContact` is the variabe from above from onSubmit
		// with `this.props.history` we can use this to redirect from the action of `this.props.newContact`
	}

	// NOTE: function declaration does not work. only function expression.
	onCheck = () => {
		this.setState({ disabled: false })
	}

	oneUp() {
		// console.log('this got called')
		this.setState({ 
			sound: Sound.status.PLAYING,
			runConfetti: true,
		})
	}

	componentDidUpdate(prevProps) {
		if (this.state.sound === Sound.status.PLAYING) {
			setTimeout(()=>{
				this.setState({ sound: Sound.status.STOPPED  })
				// console.log('sound updated')
			}, 1000)
		}
		else if (this.state.runConfetti === true) {
			setTimeout(()=>{
				this.setState({ runConfetti: false })
				// console.log('confetti updated')
			}, 11000)
		}

		// this part is for redux
		if(prevProps.errors !== this.props.errors){
			this.setState({errors: this.props.errors});
		}

		if(prevProps.contact !== this.props.contact){
			// console.log('**** contact success');
			this.setState({contact: true});
			// return (<Modal dimmer={'blurring'} trigger={
			// 	// TODO: set trigger
			// 	prevProps.contact !== this.props.contact
			// } 
			// 	basic 
			// 	size='small'
			// 	closeOnDimmerClick={false}
			// >
			// 	<Grid >
			// 		<Grid.Row className='contact-modal-grid' >
			// 			<Icon size={'huge'} name='paper plane' />
			// 		</Grid.Row>
			// 		<Grid.Row className='contact-modal-header-row' >
			// 			<Header className='contact-modal-header' content='Thank you. Your information has been delivered!' />
			// 		</Grid.Row>
			// 		<Grid.Row className='contact-modal-action'>
			// 			<Modal.Actions >
			// 				<Link to='/'>
			// 					<Button className='contact-modal-button' type='button' color='green' inverted>
			// 						Exit
			// 					</Button>
			// 				</Link>
			// 			</Modal.Actions>
			// 		</Grid.Row>
			// 	</Grid>
			// </Modal>)
		}
	}

	// componentWillReceiveProps(nextProps){
	// 	if(nextProps.errors){
	// 		this.setState({errors: nextProps.errors})
	// 	}
	// }

	render() {
		const { runConfetti, sound, disabled, errors, contact } = this.state;
		const { width, height } = this.props.size

		// const { user } = this.props.contact;

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
							<Grid.Row className='contact-grid-row' centered columns={2}>  {/* NOTE: to center, add one extra column */}
								<Grid.Column>
									<div className='contact-title'>
										CONTACT
									</div>
								</Grid.Column>
							</Grid.Row>

							<Grid.Row centered columns={1}>
								<Grid.Column>
									<Header textAlign='center' className='contact-desc'>
										<p>
											Whether you're looking for information, directions, or just want to talk, contacting me is easy as pie. Feel free to call, email or provide your information.
										</p>
									</Header>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row centered columns={3} className='contact-grid-row-entries'>
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

													<Modal dimmer={'blurring'} trigger={<div className='contact-list-content contact-resume'>Résumé</div>} >
														<Modal.Content scrolling>
															<Embed
																defaultActive={true}
																iframe={'https://docs.google.com/viewer?srcid=1N0NI3-Dxb5ac3qCgAYJm4Xx796XRZA-d&pid=explorer&efh=false&a=v&chrome=false&embedded=true'} className='contact-iframe'
																source={'youtube'}  // althought this is a google doc i needed to state this was for youtube or else an error would return in the console
															/>
															{/* NOTE: replace id (example: `1N0NI3-Dxb5ac3qCgAYJm4Xx796XRZA-d`) */}
														</Modal.Content>
													</Modal>
												</List.Content>
											</List.Item>
										</List>
										
									</Container>
								</Grid.Column>

								<Grid.Column>
									<Form onSubmit={this.onSubmit} className='contact-form' >
										{errors && 
											(
												<Message 
													negative
												>
													<p>{errors.fname}</p>
													<p>{errors.lname}</p>
													<p>{errors.email}</p>
													<p>{errors.areaCode}</p>
													<p>{errors.centralOfficeCode}</p>
													<p>{errors.lineNumber}</p>
													<p>{errors.message}</p>
												</Message>
											)
										}
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
										</Form.Group>
										<Form.Group widths='equal' >
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
											<Form.Field required>
												<label>Phone Number</label>
												<Form.Input 
													fluid 
													placeholder='area code' 
													type='tel'
													name='areaCode'
													value={this.state.areaCode}
													onChange={this.onChange}
												/>
											</Form.Field>
											<Form.Field  >
												<Form.Input 
													required
													fluid 
													placeholder='555' 
													type='tel'
													name='centralOfficeCode'
													value={this.state.centraOfficeCode}
													onChange={this.onChange}
												/>
											</Form.Field>
											<Form.Field  >
												<Form.Input 
													required
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
										
										<ReCAPTCHA
											sitekey='6LcbpnsUAAAAAJDO16_eklTGW0wJiRc0tOQe-lj_'
											onChange={this.onCheck}
											className='contact-recaptcha'
										/>
										<Button 
											// fluid
											floated='right'
											type='submit'
											disabled={
												disabled
											}
										>
											Submit
										</Button>
										

										{contact && (
										<Modal 
											open={contact}
											dimmer={'blurring'}
											basic 
											size='small'
											closeOnDimmerClick={false}
										>
											<Grid >
												<Grid.Row className='contact-modal-grid' >
													<Icon size={'huge'} name='paper plane' />
												</Grid.Row>
												<Grid.Row className='contact-modal-header-row' >
													<Header className='contact-modal-header' content='Thank you. Your information has been delivered!' />
												</Grid.Row>
												<Grid.Row className='contact-modal-action'>
													<Modal.Actions >
														<Link to='/'>
															<Button className='contact-modal-button' type='button' color='green' inverted>
																Exit
															</Button>
														</Link>
													</Modal.Actions>
												</Grid.Row>
											</Grid>
										</Modal>
										)}


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


Contact.propTypes = {   // name of this component plus `propTypes`
	newContact: PropTypes.func.isRequired,  // from above
	contact: PropTypes.object.isRequired,  // from below
	errors: PropTypes.object.isRequired,  // from below
}

const mapStateToProps = (state) => ({
	contact: state.contact,   // key name can be set to anything. but the value name needs to match whats in reducers `index.js`
	errors: state.errors,

});

export default connect(mapStateToProps, { newContact } )(withRouter(sizeMe({ monitorHeight: true })(Contact)));  // `sizeMe({ monitorHeight: true })` required to calculate display size 
