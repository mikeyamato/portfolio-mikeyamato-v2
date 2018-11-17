import React, { Component } from 'react';
import { Embed } from 'semantic-ui-react';
import videoList from './videoList';

// TODO: have this so that when this gets mounted in Work.js a new video gets put in the queue
// let selectedVideo = '';

// videoOptions()

// function videoOptions() {
// 	selectedVideo = videoList[Math.floor(Math.random() * videoList.length)];
// }


class Videos extends Component {
	state = {
		selectedVideo: 'FTQbiNvZqaY',  // toto - africa
	}
	// console.log('******',props.active)
	
	
	componentDidMount(){
		let selectedVideo = videoList[Math.floor(Math.random() * videoList.length)];
		this.setState({ selectedVideo })
	}
	
	componentWillUnmount(){
		this.setState({ active: '' })
	}
	
	
	render() {
		const { selectedVideo } = this.state;
		const { active } = this.props;  // 
		// console.log('******',this.props.active)
		
		return (
			<div>
				<Embed 
					active={active} 
					id={selectedVideo}
					source='youtube' 
			/>
			</div>
		)
	}
}

export default Videos;