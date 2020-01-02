import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const Blog = ({ category, id }) => (
	<>
	<Link to={`/blogs/${id}`}>
		<Button>
			{category} 
		</Button>
	</Link>
	</>
)

export default Blog;