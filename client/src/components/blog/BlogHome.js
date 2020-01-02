import React, { Component } from 'react';
import axios from 'axios';
import BlogForm from './BlogForm';
import BlogList from './BlogList';
import { Button, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class BlogHome extends Component {
	state = { blogs: [], adding: false }

	componentDidMount() {
		axios.get('/api/blogs')
			.then( res => {
				this.setState({ blogs: res.data })
			})
			.catch( err => {
				console.log(err)
			})
	}

	toggleAdd = () => this.setState({ adding: !this.state.adding })

	addBlog = (blog) => {
	  // add to the back end
	  axios.post('/api/blogs', blog)
	    .then( res => {
	      // add to our front end / state
	      const { blogs } = this.state
	      this.setState({ blogs: [...blogs, res.data]})
	    })
	    .catch( err => {
	      console.log(err)
	    })
	}

	render(){
		const { blogs, adding } = this.state
		return(
			<>
				<h1>Welcome to the blog!</h1>
				<Container textAlign='center'>
				<BlogList blogs={blogs}/>
				{	
					adding ?
					<BlogForm addBlog={this.addBlog} toggleAdd={this.toggleAdd} />
					:
					<Button positive onClick={this.toggleAdd}>Add Category</Button>
				}
				</Container>
			</>
		)
	}
}

export default BlogHome;