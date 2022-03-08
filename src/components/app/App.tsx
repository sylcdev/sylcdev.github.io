import React, { useEffect, useState } from 'react';
import { Col, Container, Hidden, Row } from 'react-grid-system';
import GithubAvatar from '../custom-avatar/GithubAvatar';
import LottieAnimation from '../lottie-animation/LottieAnimation';
import './App.css';

function App() {
  const [completed, setCompleted] = useState(false); 
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setCompleted(true);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
          <Row justify="center">
            <LottieAnimation className='animation'/>
          </Row>
          {completed ? content(): <React.Fragment/>}
        </Container>
      </header>
    </div>
  );
}

var content = function(){
  return (
  <div className="fade-in">
    <Row>
      <Col lg={6} md={12}>
        <Row justify="center">
            <GithubAvatar username='macote'/>
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
          <GithubAvatar username='c1rdec'/>
        </Row>
        <Row justify="center">
          <span>Cédric Lampron</span>
        </Row>
      </Col>
    </Row>
    <Row style={{height:50}}><div></div></Row>
  </div>);
};

export default App;
