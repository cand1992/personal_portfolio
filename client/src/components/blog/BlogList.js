import React from 'react';
import Blog from './Blog';
import { Button } from 'semantic-ui-react';

const BlogList = ({ blogs }) => (
	<>
	<Button.Group>
		{blogs.map( b => {
			return([<Blog key={b.id} {...b} />])
		})}
	</Button.Group>
	</>
)

export default BlogList;