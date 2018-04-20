import React, { Component } from 'react';
import './App.css';
// import Auth from './Component/Auth/Auth';
// import Dashboard from './Component/Dashboard/Dashboard';
// import Form from './Component/Form/Form';
// import Post from './Component/Post/Post';
import Nav from './Component/Nav/Nav';

import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav-box">
          <Nav />
        </div>
        <div className="routes-box">
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
