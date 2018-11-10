/*
audio file for Sound requires it to be placed in the public folder
*/


import React from 'react';
import Sound from 'react-sound';

const OneUp = (props) => {
	// console.log('when does this get called?')
	return (
		<div>
			<Sound
				url={require('../../assets/audio/smb_powerup.wav')}
				playStatus={props.playStatus}
    	/>
			
		</div>
	)
}

export default OneUp;