import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react'
import About from './About';
import Skills from './Skills';

class Home extends Component {

	render() {
		return(
			<>
			<Container>
				<Segment>
				<h1>This is the Home Page!</h1>
				<br />
				<br />
				<br />
				<br />
				</Segment>
				<Segment>
				<About />
				<br />
				<br />
				<br />
				<br />
				</Segment>
				<Segment>
				<Skills />
				</Segment>
			</Container>
			</>
		)
	}
}

export default Home;