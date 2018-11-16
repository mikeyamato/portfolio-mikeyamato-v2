import React from 'react'
import Confetti from 'react-confetti'


const ConfettiTime = (props) => {
	return (
		<div >
			<Confetti 
				width={props.width}
				height={props.height}
				run={props.run}
			/>
		</div>
	)
}


export default ConfettiTime;