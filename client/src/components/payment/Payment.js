import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
// import braintree from 'braintree-web-drop-in';  // these two go together
// import BraintreeDropin from 'braintree-dropin-react';  // these two go together
// import DropIn from "braintree-web-drop-in-react";  // alternative
import './Payment.css';

class Payment extends Component {
	render() {
		return (
			<div className='payment'>
				<div className='payment-overlay'>
					<Container>
						<Grid>
							<Grid.Row className='payment-grid-row-title' centered columns={2}>
								<Grid.Column>
									<div className='payment-title'>
										PAYMENT
									</div>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Container>
				</div>
			</div>
		)
	}
}

export default Payment;