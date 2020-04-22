import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layouts/NavBar';
import User from './components/Users/User';
import Alert from './components/layouts/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import NotFound from './components/pages/NotFound';

import './App.css';

const App = () => {
    return (
      <GithubState>
        <AlertState>
        <Router>
        <div className="App">
            <NavBar title='Github Finder' icon='fa fa-github'/>
            <div className='container'>
                <Alert />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/user/:login' component={User} />
                  <Route component={NotFound} />
                </Switch>
            </div>
        </div>
        </Router>
        </AlertState>
      </GithubState>
    );
  }

export default App;
