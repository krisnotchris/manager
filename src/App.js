import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBrIBVhAaUvIWYqkjPPen7t6uSz0BQ4gdQ',
      authDomain: 'manager-1778e.firebaseapp.com',
      databaseURL: 'https://manager-1778e.firebaseio.com',
      projectId: 'manager-1778e',
      storageBucket: 'manager-1778e.appspot.com',
      messagingSenderId: '930435640231'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
