import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => (
	<Button.Group vertical fixed>
		<Link to='/'><Button>Home</Button></Link>
		<Link to='/blog'><Button>Blog</Button></Link>
	</Button.Group>
)

export default Navbar;