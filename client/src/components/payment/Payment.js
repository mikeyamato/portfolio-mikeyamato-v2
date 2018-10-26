import React, { Component } from 'react';
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