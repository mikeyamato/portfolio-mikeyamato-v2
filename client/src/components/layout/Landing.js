import React, { Component } from 'react';
import ReactRevealText from 'react-reveal-text';
import Img from 'react-image';
import Konami from 'react-konami-code';
import './Landing.css';


class Landing extends Component {
	
	constructor(){
		super();
		this.state = { show: false }
	}

	componentDidMount() {
		setTimeout(()=>{
			this.setState({ show: true })
		}, 1000)
	}

	render() {
		return (
			<div className='landing'>
				<div className='landing-overlay'>
					<div className="landing-reveal">
						<ReactRevealText show={this.state.show} text='やまとしんすけ' transitionTime='4000' threshold={0.4} />
					</div>
					<div className='landing-title'>MY FUCKING NEW PAGE</div>
					<Konami>
						<Img src={'https://i.imgur.com/AQYcb1x.png'} className='landing-me' />
					</Konami>
				</div>
			</div>
		)
	}
}

export default Landing;

// https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/HomepageLayout.js