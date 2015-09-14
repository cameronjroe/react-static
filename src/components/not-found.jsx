import React from 'react';
import {Link} from 'react-router';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <main>
          <Grid>
            <Row>
              <Col xs={12} md={8}>
                <h1>Not Found</h1>
                <Link to='/'>Index</Link>
              </Col>
            </Row>
          </Grid>
        </main>
      );
  }
}