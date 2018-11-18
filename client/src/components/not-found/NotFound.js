// dev konnector video 66

import React, { Component } from 'react';
import { Image, Container, Grid } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import './NotFound.css';

class NotFound extends Component {
	render() {
		return (
			<div className='not-found'>
				<div className='not-found-overlay'>
					<Container>
						<Grid className='not-found-grid'>
							<Grid.Row centered columns={2} className='not-found-404-row'>
								<Grid.Column className='not-found-404-column'>
									<Link to='/'>
										<Image className='not-found-404-img' src={'https://i.imgur.com/Se8BJKY.png'} size='medium' centered />
									</Link>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Container>
				</div>
			</div>
		)
	}
}

export default withRouter(NotFound);

// art credit goes out to https://www.irasutoya.com/
