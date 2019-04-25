import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import Home from './components/Home/Home';
import Contacts from './components/Contacts/Contacts';
import Posts from './components/Posts/Posts';
import News from './containers/News/News';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/contacts" component={Contacts}></Route>
        <Route path="/posts" component={Posts}></Route>
        <Route path="/news" component={News}></Route>
      </Switch>
    </App>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
