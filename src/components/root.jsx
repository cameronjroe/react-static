import React from 'react';
import {RouteHandler} from 'react-router';
import '../styles/main';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <html>
          <head>
            <title>{this.props.title}</title>
            <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" />
            <link rel="stylesheet" type="text/css" href="/style.css" />
          </head>
          <body>
            <RouteHandler {...this.props} />
          </body>
          <script
            id='initial-props'
            type='application/json'
            dangerouslySetInnerHTML={{__html: JSON.stringify(this.props)}} />
            <script src='/bundle.js' />
        </html>
      );
  }
}