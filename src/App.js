import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInfo from './components/LeadInfo';
import UserDash from './components/UserDash';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { requireAuth } from './utils/AuthService';
import Callback from "./components/Callback";



class App extends Component {


  render() {

    return (
      <div className="App">
          <div className="container">
              <BrowserRouter>
                  <Switch>
                      <Route exact path="/" component={UserDash}/>
                      <Route path="/leads" component={UserInfo} onEnter={requireAuth}/>
                      <Route path="/callback" component={Callback}/>
                  </Switch>
              </BrowserRouter>
          </div>
      </div>
    );
  }
}

export default App;
