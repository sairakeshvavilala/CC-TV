import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import fb from "../../img/social media/fb.png";
import instragram from "../../img/social media/instragram.png";
import linkedin from "../../img/social media/linkedin.png";
import youtube from "../../img/social media/youtube.png";
import "./Footer.css";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("myproject_01", "template_4bq1gkp", form.current, "yYcbHAr7q3sv-yk9O").then(
      (result) => {
        alert("Your Email  sent successfully for getting Newsletter for us");
        console.log(result.text);
      },
      (error) => {
        alert(error.message);
        console.log(error.text);
      }
    );
    e.target.reset();
  };
  return (
    <div className="bg-dark text-white pt-5 pb-2 text-start">
      <ScrollToTop smooth top="50" />

      <Container>
        <Row className="pt-4">
          <Col md={3}>
            <h5>CCTV Camera Mart</h5>
            <p>
              208 West 22th Street <br /> Uttara, Dhaka
            </p>
            <p className=" custom-footer-link">Email : saharabanungn@gmail.com</p>
            <p className="custom-footer-link">Phone : +8801752810246</p>
            <p className=" custom-footer-link">Fax : 01950458000</p>
            <div>
              <a
                href="https://www.facebook.com/sahara.banu.796/"
                target="_blank"
                rel="noopener noreferrer"
                title="facebook"
              >
                <span>
                  <Image src={fb} rounded className="social-media-customize" />
                </span>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <span>
                  <Image src={instragram} rounded className="social-media-customize" />
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/saharabanu"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <span>
                  <Image src={linkedin} rounded className="social-media-customize" />
                </span>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
              >
                <span>
                  <Image src={youtube} rounded className="social-media-customize" />
                </span>
              </a>
            </div>
          </Col>
          <Col md={3}>
            <h5>LATEST FROM OUR BLOG</h5>

            <p className=" custom-footer-link">
              Our first blog <br /> October 12, 2020
            </p>
            <p className=" custom-footer-link">
              Our 2nd blog <br /> december, 2021
            </p>
            <p className=" custom-footer-link">
              Our 3rd blog <br /> March 12, 2022
            </p>
          </Col>
          <Col md={3}>
            <h5>QUICK LINKS</h5>

            <Link to="/" className=" custom-footer-link quick-link">
              {" "}
              <span>
                <i className="fas fa-caret-square-right  me-2 "></i>
              </span>{" "}
              Home
            </Link>
            <br />
            <Link to="/" className=" custom-footer-link quick-link">
              {" "}
              <span>
                <i className="fas fa-caret-square-right  me-2 "></i>
              </span>{" "}
              Packages
            </Link>
            <br />
           
            <Link to="/" className=" custom-footer-link quick-link">
              {" "}
              <span>
                <i className="fas fa-caret-square-right  me-2 "></i>
              </span>{" "}
              About Us
            </Link>
            <br />
           
            <Link to="/" className=" custom-footer-link quick-link">
              {" "}
              <span>
                <i className="fas fa-caret-square-right  me-2 "></i>
              </span>{" "}
              Terms And Conditions
            </Link>
            


          </Col>




          <Col md={3}>
            <h5>NEWSLETTER</h5>
            <p>Leave us your email address and we contact you back</p>
            <div>
              <form ref={form} onSubmit={sendEmail} className="">
                <input
                  className="mb-3 px-4 py-2"
                  placeholder="Enter you email Address"
                  name="email"
                  required
                />

                <input className="bg-white px-4 py-2 " type="submit" value="Subscribe" />
              </form>
            </div>
          </Col>
        </Row>
        <hr />
        <small className=" text-center d-flex justify-content-center align-items-center">
          <i className="far fa-copyright pe-3"></i> 2023 CCTv Camera – All rights reserved.
        </small>
      </Container>
    </div>
  );
};

export default Footer;

// https://themeforest.net/search/cctv%20camera
// https://marley-theme.myshopify.com/
