import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Cars } from './components'
import './style.css'
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
//import { firebaseConfig } from './firebaseConfig'
import 'firebase/auth'
import { Provider } from 'react-redux';
//import { store } from './redux/store'

let myTile = "Welcome to Mephala's used cars"

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Switch>

        <Route exact path={'/'}>
          <Home title ={myTile}/>
        </Route>

        <Route exact path='/cars'>
          <Cars></Cars>
        </Route>

      </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);


