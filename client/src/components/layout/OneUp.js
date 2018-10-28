import React, { Component } from 'react';
import Sound from 'react-sound';


class OneUp extends Component {
	render() {
		return (
			<Sound
      url='/assets/audio/smb_powerup.wav'
      playStatus={Sound.status.PAUSED}
    	/>
		)
	}
}

export default OneUp;