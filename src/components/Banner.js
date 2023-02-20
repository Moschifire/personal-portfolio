import { useState, useEffect } from 'react';
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";

function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(0);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            ticker();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring[0, text.length - 1] : fullText.substring[0, text.length + 1];

        setText(updatedText);
    }

  return (
    <section className='banner' id='home'>
        <Container>
            <Row className="align-items=center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{"Hi I'm webdecoded"}<span className='wrap'>web developer</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor bibendum volutpat. Suspendisse dignissim metus vel velit vehicula, vel fermentum metus laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis at velit id tincidunt. Vestibulum tincidunt ante et tellus suscipit mollis. Duis volutpat diam massa, a volutpat erat luctus sed. Quisque laoreet vehicula aliquam. Aliquam id ligula sem. Proin tristique dolor eget diam finibus imperdiet. Nunc in lacus elementum, maximus lectus in, fringilla nibh. Nullam pretium lacinia aliquam. Praesent purus nibh, dignissim quis est placerat, pretium venenatis ex. In ultrices ex a tortor dictum sagittis. Sed vel ipsum sapien.</p>
                    <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={ headerImg } alt="Header Img" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export { Banner };