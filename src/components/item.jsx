import React from 'react';
import {Link} from 'react-router';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  countUp() {
    this.setState({
      count: this.state.count++
    });
  }

  render() {
    return (
        <div className='item'>
          <h1>Item {this.state.count}</h1>
          <button className='btn btn-primary' onClick={this.countUp.bind(this)}>Count Items</button>
        </div>
      );
  }
}