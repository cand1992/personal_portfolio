import React, { Component } from 'react';
import BlogForm from './BlogForm';
import BlogList from './BlogList';
import BlogHome from './BlogHome';
import { Button, Container, Segment } from 'semantic-ui-react';
import axios from 'axios';
import PostList from './PostList';

class BlogShow extends Component {
	state = { blogs: [], posts: [], editing: false }

	componentDidMount() {
		axios.get(`/api/blogs/${this.props.match.params.id}/posts`)
			.then( res => {
				this.setState({ posts: res.data })
			})
			.catch( err => {
				console.log(err)
			})
		axios.get('/api/blogs')
			.then( res => {
				this.setState({ blogs: res.data })
			})
			.catch( err => {
				console.log(err)
			})
	}

	toggleEdit = () => this.setState({ editing: !this.state.editing })

	updateBlog = (id, blog) => {
    axios.put(`/api/blogs/${id}`, blog)
    	.then( res => {
    		const blogs = this.state.blogs.map( b => {
    			if ( b.id === id) {
    				return res.data
    			}
    			return b
    		})
    		this.setState({ blogs })
    	})
    	.catch( err => {
        console.log(err)
      })
  }

	deleteBlog = (id) => {
		axios.delete(`/api/blogs/${id}`)
			.then( res => {
				const { blogs } = this.state
				this.setState({ blogs: blogs.filter( b => b.id !== id )})
				this.props.history.push('/blog')
			})
			.catch( err => {
	      console.log(err)
	    })
	}

	addPost = (post) => {
	  // add to the back end
	  axios.post(`/api/blogs/${this.props.match.params.id}/posts`, post)
	    .then( res => {
	      // add to our front end / state
	      const { blogs } = this.state
	      this.setState({ blogs: [...blogs, res.data]})
	    })
	    .catch( err => {
	      console.log(err)
	    })
	}

	render() {
		const { id } = this.props.match.params
		const { editing } = this.state
		return(
			<>
				{
					editing ? <BlogForm {...this.props.match} updateBlog={this.updateBlog} toggleEdit={this.toggleEdit} /> :
				<>
				<BlogHome />
				<Container textAlign='center'>
				<Segment>
				<p>Eventually my Posts will go here along with their CRUD actions.</p>
				<PostList posts={this.state.posts} />
				</Segment>
				</Container>
				<Button.Group vertical labeled icon floated='right'>
					<Button icon='trash' content='Delete' onClick={() => this.deleteBlog(id)} />
					<Button icon='pencil' content='Edit' onClick={() => this.toggleEdit()} />
				</Button.Group>
				</>
				}
			</>
		)
	}
}

export default BlogShow;