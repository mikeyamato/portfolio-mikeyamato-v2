import React, { Component } from 'react';
import { Grid, Container, Image, Header, Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Img from 'react-image';
import Konami from 'react-konami-code';
import Sound from 'react-sound';
import OneUp from './OneUp';
import RevealText from './Reveal';
import './Landing.css';

class Landing extends Component {
	
	state = { 
		show: false, 
		sound: Sound.status.STOPPED,
		japaneseName: 'やまとしんすけ',
	}

	oneUp = this.oneUp.bind(this);
	

	componentDidMount() {
		setTimeout(()=>{
			this.setState({ show: true })
		}, 600)
	}

	oneUp() {
		// console.log('this got called')
		this.setState({ 
			sound: Sound.status.PLAYING
		})
	}

	render() {
		return (
			<div className='landing'>
				<div className='landing-overlay'>
					<Container>
						<Grid>
							<Grid.Row centered columns={2}>
								<Grid.Column className='landing-name'>
									Shinsuke "Mike" Yamato
								</Grid.Column>
							</Grid.Row>
							<Grid.Row >
								<Grid.Column className="landing-jText">
									<RevealText show={this.state.show} text={this.state.japaneseName} />
								</Grid.Column>
							</Grid.Row>
							<Grid.Row >
								<Grid.Column className='landing-title'>
									MY NEW PAGE. I watched the storm, so beautiful yet terrific.
								</Grid.Column>
							</Grid.Row>
							<Grid.Row centered columns={3} verticalAlign='middle'>
								<Grid.Column width={8} className='landing-paragraph' >
									<Header as='h2'>Header</Header>
									<p>
										Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
										Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
										ridiculus mus.  
									</p>
								</Grid.Column>
								<Grid.Column width={4}>
									<Image src={require('../../assets/logos/react.svg')} size='small' />
								</Grid.Column>
							</Grid.Row>

							<Grid.Row centered columns={3} verticalAlign='middle'>
								<Grid.Column width={4}>
									<Image src={require('../../assets/logos/react.svg')} size='small' />
								</Grid.Column>
								<Grid.Column width={8} className='landing-paragraph' >
									<Header as='h2'>Header</Header>
									<p>
										Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
										Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
										ridiculus mus.  
									</p>
								</Grid.Column>
							</Grid.Row>
							<Konami 
								timeout={10000}
								action={this.oneUp}
							>
								<Img src={'https://i.imgur.com/AQYcb1x.png'} className='landing-me' />
								<OneUp playStatus={this.state.sound}/>
							</Konami>

							<Grid.Row centered columns={2} verticalAlign='middle'>
								<Grid.Column width={8} className='landing-paragraph' >
									<Header as='h2'>Header</Header>
									<p>
										Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
										Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
										ridiculus mus.  
									</p>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row centered columns={2} verticalAlign='middle'>
								<Link to='/work'>
									<Button type='button' animated='fade'>
										<Button.Content visible>Learn More</Button.Content>
										<Button.Content hidden>Learn More</Button.Content>
									</Button>
								</Link>
							</Grid.Row>

						</Grid>

					</Container>
				</div>
			</div>
		)
	}
}

export default Landing;

// https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/HomepageLayout.js