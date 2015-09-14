import React from 'react';
import Router, {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import Root from './components/root';
import Index from './components/index';
import About from './components/about';
import NotFound from './components/not-found';

export default (
  <Route path='/' handler={Root}>
    <DefaultRoute name='index' handler={Index} />
    <Route name='about' path='/about' handler={About} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);