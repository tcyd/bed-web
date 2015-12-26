import './common/lib';
import App from './component/App';
import About from './component/About';
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route } from 'react-router';

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
    </Route>
  </Router>
), document.getElementById('react-content'));
