import React from 'react';
import { Col, Container, Hidden, Row } from 'react-grid-system';
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
                  <CustomAvatar initials='MAC' name='Marc-André Côté' />
              </Row>
              <Row justify="center">
                <span>Marc-André Côté</span>
              </Row>
            </Col>
            <Hidden lg xl xxl>
              <Col md={12} style={{height:50}}></Col> 
            </Hidden>
            <Col lg={6} md={12}>
              <Row justify="center">
                <CustomAvatar name='Cédric Lampron'/>
              </Row>
              <Row justify="center">
                <span>Cédric Lampron</span>
              </Row>
            </Col>
          </Row>
          <Row style={{height:50}}/>
        </Container>
      </header>
    </div>
  );
}

export default App;
