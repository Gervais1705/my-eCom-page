import React from "react";
import { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchedAsyncProduct,
  getProduct,
  removeDetails,
} from "../../states/productsSlice";
import "./ProductDetails.css";
import facebook from '../../images/social/Facebook.png';
import insta from '../../images/social/Instagram.png';
import printrest from '../../images/social/Pinterest.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart, faTag } from "@fortawesome/free-solid-svg-icons";
import Deliveries from "../HomePage/Delivery/Deliveries";
import PopularProducts from "../HomePage/PopularProducts/PopularProducts";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector(getProduct);
  useEffect(() => {
    dispatch(fetchedAsyncProduct(id));
    return () => {
      dispatch(removeDetails());
    };
  }, [dispatch, id]);
  console.log(product);
  const { title, price, image, description } = product;
  return (
    <div>
      <Container>
        <div>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div className="p-3">
              <Image src={image} height="400px"></Image>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="d-flex flex-column justify-content-center align-items-start">
              <h3 className="fw-bold text-start">{title}</h3>
              <p className="mb-1">
                <span className="price-color fw-bold">${price}</span>
                <span>
                  <small className="discount-price">$109.00</small>
                </span>
              </p>
              <p className="mb-3">
                <FontAwesomeIcon
                  className="star-color"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="star-color"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="star-color"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="star-color"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="star-color"
                  icon={faStar}
                ></FontAwesomeIcon>
              </p>
              <div className="underline-div mb-3"></div>
              <div className="d-flex justify-content-start align-items-center mb-3">
                <div className='fw-bold'>Colors</div>
                <div className="d-flex justify-content-between align-items-center ms-3">
                  <div className="dot-blue"></div>
                  <div className="dot-red ms-2 me-2"></div>
                  <div className="dot-green"></div>
                </div>
              </div>
              <div className="mb-3">
                <select className="select-box-style me-2" name="Hello" id="">
                  <option value="1">Size</option>
                  <option value="2">S</option>
                  <option value="3">L</option>
                  <option value="3">XL</option>
                </select>
                <select className="select-box-style ms-2" name="Hello" id="">
                  <option value="1">QTY</option>
                  <option value="2">1</option>
                  <option value="3">2</option>
                  <option value="4">3</option>
                </select>
              </div>
              <p className="stock-para">
                <small>Only 7 Left In Stock</small>
              </p>
              <div className='mb-3'>
                <button className='cart-btn'>Add To Cart</button>
                <button className='buy-btn'>Buy Now</button>
              </div>
              <div className="d-flex justify-content-between align-items-center wishlist-style">
                <p className='me-3'>
                  <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>{" "}
                  <span>Add To Wishlist</span>
                </p>
                <p>
                  <FontAwesomeIcon icon={faTag}></FontAwesomeIcon>{" "}
                  <span>Compare</span>
                </p>
              </div>
              <div>
                <p className="text-start desc">
                  {description}
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
            <Col xs={12} md={6} lg={6} className='p-3 pt-1 pe-5'>
                <Row>
                <Col xs={12} md={4} lg={4}>
                    <Image src="https://media.istockphoto.com/photos/flat-lay-with-womans-clothes-and-accessories-picture-id1339264709?b=1&k=20&m=1339264709&s=170667a&w=0&h=qzBCqQvXpk-eLH8e72ZRaWRPuvWFwcUKZqGr1IsyTlE=" height="150px" width="170px"></Image>
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <Image src="https://media.istockphoto.com/photos/gathering-items-to-be-donated-to-charity-items-are-placed-on-a-futon-picture-id1339697803?b=1&k=20&m=1339697803&s=170667a&w=0&h=bYarLvJS8g6GLQcj9WHuCOAFr6ouMjgu7mTktgolsEc=" height="150px" width="170px"></Image>
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <Image src="https://media.istockphoto.com/photos/multicolored-sport-sleeveless-tshirts-and-shirts-picture-id1321017606?b=1&k=20&m=1321017606&s=170667a&w=0&h=PLDx4geBo_o_SFNFplNkCy3yhJ9SofPfhTh2eHxVKuk=" height="150px" width="170px"></Image>
                </Col>
                </Row>
            </Col>
            <Col xs={12} md={6} lg={6}>
                <div className="p-3 pt-1 ps-0">
                    <div className="d-flex justify-content-start align-items-center mt-2">
                    <div className="square-style"></div>
                    <div className="details-para">Lorem Ipsum is simply dummy text.</div>
                    </div>
                    <div className="d-flex justify-content-start align-items-center mt-2">
                    <div className="square-style"></div>
                    <div className="details-para">Lorem Ipsum is simply dummy text.</div>
                    </div>
                    <div className='d-flex justify-content-start align-items-center mt-3'>
                        <p className="fw-bold mb-0">Share</p>
                        <div className='d-flex justify-content-evenly align-items-center m-3'>
                        <div className=''><img src={printrest} alt="" height={18} width={18} /></div>
                        <div className='ms-3 me-3'><img src={facebook} alt="" height={18} width={18} /></div>
                        <div className=''><img src={insta} alt="" height={18} width={18} /></div>
                        
                    </div>
                    </div>
                </div>
            </Col>
        </Row>
        </div>
        <div className='delivery-section-style'>
                <Deliveries></Deliveries>
            </div>
            <div className='collection-section-style'>
                <PopularProducts></PopularProducts>
            </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
