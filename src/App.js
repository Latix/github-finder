import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layouts/NavBar';
import Users from './components/Users/Users';
import User from './components/Users/User';
import Search from './components/Users/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
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
                  <Route exact path='/' render={ props => (
                    <Fragment>
                      <Search />
                        <Users />
                    </Fragment>
                  )} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/user/:login' component={User} />
                </Switch>
            </div>
        </div>
        </Router>
        </AlertState>
      </GithubState>
    );
  }

export default App;
