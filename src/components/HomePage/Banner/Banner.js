import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import shirt from "../../../images/banner/Rectangle 4.png";
import model from "../../../images/banner/Rectangle 3.png";
import Countdown from "react-countdown";
import { renderer } from "./Timer";
const Banner = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div className="d-flex flex-column align-items-start justify-content-evenly pt-5 mb-4">
              <h1 className="fw-bolder mb-1 fs-0">Top Designers Pick</h1>
              <p className="text-start mb-4 banner-para">
                <small>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                </small>
              </p>
              <button className="shop-now-btn">Shop Now</button>
              <div>
                <Countdown date={Date.now() + 1000000000} renderer={renderer} />
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="d-flex justify-content-center align-items-center flex-wrap p-3 pt-0">
              <img className="shirt-style" src={shirt} alt="" />
              <img className="model-style" src={model} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
