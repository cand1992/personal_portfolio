import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/portfolio_things/Home';
import Navbar from './components/shared/Navbar';
import BlogHome from './components/blog/BlogHome';
import NoMatch from './components/shared/NoMatch';
import BlogShow from './components/blog/BlogShow';
import './App.css';

const App = () => (
  <Grid className='container1'>
    <Grid.Row>
      <Grid.Column width={1} className='wrapper'>
        <Navbar />
      </Grid.Column>
      <Grid.Column width={15} className='wrapper'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={BlogHome} />
          <Route exact path="/blogs/:id" component={BlogShow} />
          <Route component={NoMatch} />
        </Switch>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default App;
