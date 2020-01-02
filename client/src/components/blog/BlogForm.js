import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class BlogForm extends Component {
	state = { category: '' }

	componentDidMount() {
		if (this.props.params.id) {
			const { category } = this.props
			this.setState({ category })
		}
	}

	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		if (this.props.params.id) {
			this.props.updateBlog(this.props.params.id, this.state)
			this.props.toggleEdit()
		} else {
			this.props.addBlog(this.state)
			this.props.toggleAdd()
		}
		this.setState({ category: '' })
	}

	render() {
		return(
			<Form onSubmit={this.handleSubmit}>
				<Form.Input
					name='category'
					value={this.state.category}
					label='Category'
					onChange={this.handleChange}
				/>
				<button type='submit'>Submit</button>
			</Form>
		)
	}
}

export default BlogForm;