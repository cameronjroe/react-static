import React from 'react';
import Router from 'react-router';
import routes from './routes';
import './CNAME';

export default function (path, props, callback) {
  Router.run(routes, path, (Root) => {
    const html = React.renderToString(<Root {...props} />);
    callback('<!DOCTYPE html>' + html);
  })
}

if (typeof document !== 'undefined') {
  var initialProps = JSON.parse(document.getElementById('initial-props').innerHTML)
  Router.run(routes, Router.HistoryLocation, (Handler) => {
    React.render(<Handler {...initialProps} />, document)
  });
}