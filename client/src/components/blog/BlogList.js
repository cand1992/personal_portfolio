import React from 'react';
import BlogHome from './BlogHome';
import Blog from './Blog';
import { Button } from 'semantic-ui-react';

const BlogList = ({blogs}) => (
	<>
	{
		<Button.Group buttons={blogs.map( b => {
			<Blog key={b.id} {...b} />
		})}
		/>
	}
	</>
)

export default BlogList;