import React from 'react';
import Avatar from 'react-avatar';
import { Col, Container, Row } from 'react-grid-system';
import logo from '../../logo.svg';
import CustomAvatar from '../custom-avatar/CustomAvatar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
          <Row justify="center">
            <img src={logo} className="App-logo" alt="logo" />
          </Row>
          <Row>
            <Col lg={6} md={12}>
              <Row justify="center">
                  <CustomAvatar name='Marc-André Côté'/>
              </Row>
              <Row justify="center">
                <span>Marc-André Côté</span>
              </Row>
            </Col>
            <Col lg={6} md={12}>
              <Row justify="center">
                <CustomAvatar name='Cédric Lampron'/>
              </Row>
              <Row justify="center">
                <span>Cédric Lampron</span>
              </Row>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
