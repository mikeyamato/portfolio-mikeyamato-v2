import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import './Resources.css';

class Resources extends Component {
	render() {
		return (
			<div className='resources'>
				<div className='resources-overlay'>
					<Container>
						<Grid>
							<Grid.Row className='resources-grid-row-title' centered columns={2}>
								<Grid.Column>
									<div className='resources-title'>
										RESOURCES
									</div>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Container>
				</div>
			</div>
		)
	}
}

export default Resources;
