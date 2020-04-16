import React from 'react';
import './App.css';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col />
        <Col xs={12} md={10} lg={10}>
          <Main />
        </Col>
        <Col />
      </Row>
    </Container>
  );
}

export default App;
