import PropTypes from 'prop-types'
import React from 'react'
import sizeMe from 'react-sizeme'
import Confetti from 'react-confetti'


const ConfettiTime = (props) => {
	return (
		<div >
			<Confetti 
				width={'2000%'}
				height={'1500%'}
				run={props.run}
			/>
		</div>
	)
}


export default ConfettiTime;