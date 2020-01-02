import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/portfolio_things/Home';
import Navbar from './components/shared/Navbar';
import Blog from './components/blog/Blog';
import NoMatch from './components/shared/NoMatch';

const App = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={1}>
        <Navbar />
      </Grid.Column>
      <Grid.Column width={15}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blogs/:id" />
          <Route component={NoMatch} />
        </Switch>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default App;
