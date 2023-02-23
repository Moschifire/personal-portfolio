import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className='skill-bx'>
                        <h2>SKills</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor bibendum volutpat. Suspendisse dignissim metus vel velit vehicula, vel fermentum metus laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis at velit id tincidunt. Vestibulum tincidunt ante et tellus suscipit mollis. Duis volutpat diam massa, a volutpat erat luctus sed. Quisque laoreet vehicula aliquam. Aliquam id ligula sem. Proin tristique dolor eget diam finibus imperdiet. Nunc in lacus elementum, maximus lectus in, fringilla nibh. Nullam pretium lacinia aliquam. Praesent purus nibh, dignissim quis est placerat, pretium venenatis ex. In ultrices ex a tortor dictum sagittis. Sed vel ipsum sapien.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className='background-image-left' src={colorSharp} alt="" />
    </section>
  )
}

export { Skills };