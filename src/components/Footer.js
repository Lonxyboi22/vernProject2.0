import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";

const Footer = (props) => {
    let date = new Date();
    let year = date.getFullYear();
    return (
    <Container fluid className="has-background-dark has-text-centered has-text-grey-light footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Designed and Developed by Andrew MacPherson</h3>
            <h3>Artwork and Design by Vern Planck</h3>          
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © VSP + ASM {year}</h3>
          </Col>
        </Row>
    </Container>
    )
  }
  
  export default Footer