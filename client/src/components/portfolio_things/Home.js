import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import About from './About';
import Skills from './Skills';

class Home extends Component {

	render() {
		return(
			<>
			<Container>
				<h1>This is the Home Page!</h1>
				<br />
				<br />
				<br />
				<br />
				<About />
				<br />
				<br />
				<br />
				<br />
				<Skills />
			</Container>
			</>
		)
	}
}

export default Home;