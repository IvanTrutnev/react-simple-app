import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import Home from './components/Home/Home';
import Contacts from './components/Contacts/Contacts';
import Posts from './containers/Posts/Posts';
import Post from './containers/Post/Post';
import News from './containers/News/News';
import Error from './components/Error/Error'

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/contacts" component={Contacts}></Route>
        <Route path="/news" component={News}></Route>
        <Route exact path="/posts" component={Posts}></Route>
        <Route path="/posts/:id" component={Post}></Route>
        <Route path="*" component={Error}></Route>
      </Switch>
    </App>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
