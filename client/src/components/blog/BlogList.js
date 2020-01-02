import React from 'react';
import Blog from './Blog';
import { Button } from 'semantic-ui-react';

const BlogList = ({ blogs }) => (
	<>
		{blogs.map( b => {
			return(<Blog key={b.id} {...b} />)
		})}
	</>
)

export default BlogList;