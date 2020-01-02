import React, { Component } from 'react';
import BlogForm from './BlogForm';
import BlogList from './BlogList';
import { Button, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class BlogShow extends Component => {

	render() {
		
		return(
			<>
				<h1>Welcome to the blog!</h1>
				<Container textAlign='center'>
				<BlogList blogs={this.props.blogs}/>
				
				</Container>
				<Button.Group fixed vertical labeled icon floated='right'>
					<Button icon='trash' content='Delete' />
					<Button icon='pencil' content='Edit' />
				</Button.Group>
			</>
		)
	}
}

export default BlogShow.js