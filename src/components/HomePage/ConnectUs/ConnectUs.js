import React from "react";
import { Button, Col, Container, Form, Image, InputGroup, Row } from "react-bootstrap";
import './ConnectUs.css';
import subsImage from '../../../images/subsImage.jpg';
const ConnectUs = () => {
  return (
    <div>
      <Container>
        <div className='newsletter-style'>
          <Row>
            <Col xs={12} md={7} lg={7}>
              <div className='d-flex flex-column justify-content-center align-items-center text-part-style'>
                <h2>SIGN UP FOR NEWS & GET 20% OFF</h2>
                <InputGroup className="mb-3 w-100">
                  <Form.Control
                    placeholder="Your Email Address"
                    aria-label="Your Email Address"
                    aria-describedby="basic-addon2"
                    outline="false"
                  />
                  <Button className='newsletter-btn' id="button-addon2">
                    Subscribe
                  </Button>
                </InputGroup>
              </div>
            </Col>
            <Col xs={12} md={5} lg={5} className='newsletter-img'>
                <Image className='newsletter-img-1' src={subsImage} fluid/>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ConnectUs;
