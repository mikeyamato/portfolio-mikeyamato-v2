import React, { Component } from 'react';
import { Grid, Form } from 'semantic-ui-react';
import './Contact.css';

class Contact extends Component {
	render() {
		return (
			<div className='contact'>
				<div className='contact-overlay'>
					<div className='contact-title'>
						Contact
					</div>

					<Grid centered columns={2}>
						<Grid.Column>
							<Form>
								<Form.Group>
									<Form.Input
										label='Phone Number'
										placeholder='area code'
									/>
									<Form.Input
										// label='.'
										placeholder='555'
									/>
									<Form.Input
										// label='-'
										placeholder='5555'
									/>
								</Form.Group>
							</Form>
						</Grid.Column>
					</Grid>
				</div>
			</div>
		)
	}
}

export default Contact;
