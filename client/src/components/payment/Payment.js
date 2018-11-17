import React, { Component } from 'react';
import braintree from 'braintree-web-drop-in';  // these two go together
import BraintreeDropin from 'braintree-dropin-react';  // these two go together
import DropIn from "braintree-web-drop-in-react";  // alternative
import './Payment.css';

class Payment extends Component {
	render() {
		return (
			<div className='payment'>
				<div className='payment-overlay'>
					<div className='payment-title'>
						Payment
					</div>
				</div>
			</div>
		)
	}
}

export default Payment;