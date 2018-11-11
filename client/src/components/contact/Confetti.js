import React from 'react'
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