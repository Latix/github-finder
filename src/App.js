import React, {Component} from 'react';
import NavBar from './components/layouts/NavBar';
import Users from './components/Users/Users';
import './App.css';

class App extends Component {
  componentDidMount() {

  }
  
  render() {
    return (
      <div className="App">
          <NavBar />
       <div className='container'>
          <Users />
       </div>
      </div>
    );
  }
}

export default App;
