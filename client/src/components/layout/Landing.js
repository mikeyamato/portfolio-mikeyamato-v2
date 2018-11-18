import React, { Component } from 'react';
import { Grid, Container, Image, Header, Button, Transition } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import FadeIn from 'react-fade-in';

import Img from 'react-image';
import Konami from 'react-konami-code';
import Sound from 'react-sound';
import OneUp from '../common/OneUp';
import RevealText from './Reveal';
import './Landing.css';

class Landing extends Component {
	
	state = { 
		show: false, 
		sound: Sound.status.STOPPED,
		delay: 5500,
		transitionDuration: 2000,
		visible1: true,
		visible2: true,


		// transitionTimeTitle: 2500,
		// transitionTimeBody: 1000,
		// timeBody: 0,
	}

	oneUp = this.oneUp.bind(this);
	

	componentDidMount() {
		setTimeout(()=>{
			this.setState({ show: true  })
		}, 100);
		setTimeout(()=>{
			this.setState({ showTitle: true  })
		}, 2000);
	}

	componentDidUpdate() {
		if (this.state.sound === Sound.status.PLAYING) {
			setTimeout(()=>{
				this.setState({ sound: Sound.status.STOPPED  })
				console.log('component updated')
			}, 4000)
		}
	}

	// componentDidMount() {
	// 	window.scrollTo(0, 0);  // helps with having the page open at the top
	// }

	oneUp() {
		// console.log('this got called')
		this.setState({ 
			sound: Sound.status.PLAYING
		})
	}

	toggleVisibility1 = () => this.setState({ visible1: !this.state.visible1 })
	toggleVisibility2 = () => this.setState({ visible2: !this.state.visible2 })


	render() {
		const { delay, transitionDuration, visible1, visible2 } = this.state;

		return (
			<div className='landing'>
				<div className='landing-overlay'>
					<Container>
						<Grid>
							<Grid.Row className='landing-jText'>
								<Grid.Column >
									<RevealText 
										show={this.state.show} 
										text={'やまとしんすけ'} 
									/>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row className='landing-eText'>
								<Grid.Column >
									<RevealText 
										show={this.state.show} 
										text={'Shinsuke \"Mike\" Yamato'} 
									/>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row className='landing-title'>
								<Grid.Column >
									<RevealText 
										show={this.state.showTitle} 
										text={'Software Engineer / Solutions Engineer'} 
									/>
								</Grid.Column>
							</Grid.Row>

							
							<Grid.Row className='landing-desc'>
								<Grid.Column>
									<FadeIn delay={delay} transitionDuration={transitionDuration}>
										<p>Los Angeles based full-stack software engineer with a MERN stack background.</p>
									</FadeIn>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row centered columns={3} verticalAlign='middle' className='landing-paragraph' >
								<Grid.Column width={8}>
									<FadeIn delay={delay} transitionDuration={transitionDuration}>
										<Header as='h2' className='landing-header'>About</Header>
									</FadeIn>
									<FadeIn delay={delay} transitionDuration={transitionDuration}>
										<p>
											While my roots are grouned in JavaScript I take great joy in learning new frameworks, packages, and languages. I am equally comfortable working on the backend as I am on the frontend. 
										</p>
									</FadeIn>
								</Grid.Column>
								<Grid.Column width={2}>
									<FadeIn delay={delay} transitionDuration={transitionDuration}>
										<Transition animation={'pulse'} duration={600} visible={visible1}>
											<div onClick={this.toggleVisibility1}>
												<Image src={'https://i.imgur.com/Zwj1YOO.png'} size='small' />
											</div>
										</Transition>
									</FadeIn>
								</Grid.Column>
							</Grid.Row>

							<Grid.Row centered columns={3} verticalAlign='middle' className='landing-paragraph' >
								<Grid.Column width={2}>
									<FadeIn delay={delay} transitionDuration={transitionDuration}>
										<Transition animation={'pulse'} duration={600} visible={visible2}>
											<div onClick={this.toggleVisibility2}>
												<Image src={'https://i.imgur.com/3NKuNG5.png'} size='small' />
											</div>
										</Transition>
									</FadeIn>
								</Grid.Column>
								<Grid.Column width={8}>
									<FadeIn delay={delay} transitionDuration={transitionDuration}>
										<Header as='h2' className='landing-header'>Projects</Header>
									</FadeIn>
									<FadeIn delay={delay} transitionDuration={transitionDuration}>
										<p>
											I've been fortunate enough to work on awesome projects ranging from creating a Slackbot to an augmented reality mobile application.
										</p>
									</FadeIn>
								</Grid.Column>
							</Grid.Row>

							<Konami 
								timeout={2500}
								action={this.oneUp}
							>
								<Img src={'https://i.imgur.com/AQYcb1x.png'} className='landing-my-pic' />
								<OneUp playStatus={this.state.sound}/>
							</Konami>

							<Grid.Row centered columns={2} verticalAlign='middle' className='landing-paragraph'>
								<Grid.Column width={8}>
									<FadeIn delay={delay} transitionDuration={transitionDuration}>
										<Header as='h2' className='landing-header'>More</Header>
									</FadeIn>
									<FadeIn delay={delay} transitionDuration={transitionDuration}>
										<p>
											Click the button below to find out more about the work I've done, how to contact me, and more!  
										</p>
									</FadeIn>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row centered columns={2} verticalAlign='middle' className='landing-button-row'>
								<Link to='/work'>
									<FadeIn delay={delay} transitionDuration={transitionDuration}>
										<Button className='landing-button' type='button' animated='fade' color='grey' >
											<Button.Content visible>Learn More</Button.Content>
											<Button.Content hidden>Learn More</Button.Content>
										</Button>
									</FadeIn>
								</Link>
							</Grid.Row>
						</Grid>
					</Container>
				</div>
			</div>
		)
	}
}

export default withRouter(Landing);

// https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/HomepageLayout.js