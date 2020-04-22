import React, {useState, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layouts/NavBar';
import Users from './components/Users/Users';
import User from './components/Users/User';
import Search from './components/Users/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import './App.css';

const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({msg:msg, type: type})
    setTimeout(() => {
      setAlert(null)
    }, 5000);
  }

    return (
      <GithubState>
        <Router>
        <div className="App">
            <NavBar title='Github Finder' icon='fa fa-github'/>
            <div className='container'>
                <Alert alert={alert} />
                <Switch>
                  <Route exact path='/' render={ props => (
                    <Fragment>
                      <Search 
                        setAlert={showAlert}
                        />
                        <Users />
                    </Fragment>
                  )} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/user/:login' component={User} />
                </Switch>
            </div>
        </div>
        </Router>
      </GithubState>
    );
  }

export default App;
