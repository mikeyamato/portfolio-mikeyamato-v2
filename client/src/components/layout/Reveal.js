import React from 'react';
import ReactRevealText from 'react-reveal-text';

const RevealText = (props) => {
	return(
		<div>
			<ReactRevealText 
				show={props.show} 
				text={props.text} 
				transitionTime={4000} 
				threshold={0.4} 
			/>
		</div>
	)
}

export default RevealText;