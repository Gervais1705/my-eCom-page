import React from "react";
import { Button, Col, Container, Form, Image, InputGroup, Row } from "react-bootstrap";
import './ConnectUs.css';
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
                <Image className='newsletter-img-1' src="https://media.istockphoto.com/photos/asian-chinese-female-boutique-shop-clothing-store-owner-checking-picture-id1307512096?b=1&k=20&m=1307512096&s=170667a&w=0&h=ooUd9gy8VPs6U5WR_EwH9SqtPG1drP7AidYY-f5BSwU=" fluid/>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ConnectUs;
