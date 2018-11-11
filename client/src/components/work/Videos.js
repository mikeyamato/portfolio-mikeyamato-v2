import React from 'react'
import { Embed } from 'semantic-ui-react';
import videoList from './videoList';


// TODO: have this so that when this gets mounted in Work.js a new video gets put in the queue
let selectedVideo = '';

videoOptions()

function videoOptions() {
	selectedVideo = videoList[Math.floor(Math.random() * videoList.length)];
}



const Videos = (props) => {
	
	return (
		<div>
			<Embed 
				active={props.active} 
				id={selectedVideo}
				source='youtube' 
			/>
		</div>
	)
}


export default Videos;