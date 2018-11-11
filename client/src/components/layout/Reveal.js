import React from 'react';
import ReactRevealText from 'react-reveal-text';

const RevealText = (props) => {
	return(
		<div>
			<ReactRevealText 
				show={props.show} 
				text={props.text} 
				transitionTime={2500} 
				threshold={0.5}
				timingFunction="ease-in" 
			/>
		</div>
	)
}

export default RevealText;