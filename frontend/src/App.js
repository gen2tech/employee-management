
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import './assets/betaTable.css';
import './assets/custom.css';
import Svg from './components/svg';
import logo from './assets/images/logo.png';
import userAvatar from './assets/images/user.png';


import List from './pages/list';
import Add from './pages/add';
import Edit from './pages/edit';
import Crud from './pages/crud';

class App extends Component {
  render() {
    return (
    <Router>
    <div id='wrap'>  
    <div className="container shadow">

    {/* Navigation */}
  <nav className="navbar navbar-expand-lg navbar-light bg-white py-0">
    <Link to={'/'} className="navbar-brand"><img src={logo} /></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse h-100" id="navbarText">
      <ul className="navbar-nav mr-auto h-100">
        <li className="nav-item d-flex align-items-center">
          <Link to={'/'} className="nav-link">Calender <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item d-flex align-items-center">
          <Link to={'/'} className="nav-link">Statistic</Link>
        </li>
        <li className="nav-item active d-flex align-items-center">
          <Link to={'/'} className="nav-link">Employee</Link>
        </li>
        <li className="nav-item d-flex align-items-center">
          <Link to={'/'} className="nav-link">Client</Link>
        </li>
        <li className="nav-item d-flex align-items-center">
          <Link to={'/'} className="nav-link">Equipment</Link>
        </li>
      </ul>
      <div className="d-flex align-items-center h-100 navbar-text">
        <Svg type='bell' />
        <div className="position-relative mr-4">
          <div className="custom-badge rounded-circle position-absolute"></div>
          <Svg type='mail' />
        </div>
        <div className="h-100">
          <img src={userAvatar} className="rounded-circle avatar" />
        </div>
      </div>
    </div>
  </nav><br/>
      <Switch>
          <Route exact path='/' component={ List } />
          <Route exact path='/add' component={ Add } />
          <Route exact path='/edit/:id' component={ Edit } />
          <Route exact path='/crud' component={ Crud } />
      </Switch>
    </div>
    </div>
    </Router>
    );
  }
}

export default App;