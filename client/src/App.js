import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import { Container, } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import './App.css';
import Animals from './components/Animals';

  const App = () => (
    <Fragment>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/animals' component={Animals} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </Fragment>
  );

export default App;
