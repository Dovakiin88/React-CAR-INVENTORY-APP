import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Cars, SignIn } from './components';
import './style.css'
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { firebaseConfig } from './firebaseConfig'
import 'firebase/auth'
import { Provider } from 'react-redux';
import { store } from './redux/store'

let myTile = "Welcome to Mephala's used cars"

ReactDOM.render(
  <React.StrictMode>
  <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
    <Provider store={store}>

      <Router>
        <Switch>

          <Route exact path={'/'}>
            <Home title ={myTile}/>
          </Route>

          <Route exact path='/cars'>
            <Cars></Cars>
          </Route>

          <Route exact path='/signin'>
            <SignIn></SignIn>
          </Route>

        </Switch>
      </Router>

    </Provider>
  </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


