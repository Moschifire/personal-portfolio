import React from 'react'
import { Col, Container, Row, Tab } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

function Projects() {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor bibendum volutpat. Suspendisse dignissim metus vel velit vehicula, vel fermentum metus laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis at velit id tincidunt. Vestibulum tincidunt ante et tellus suscipit mollis. Duis volutpat diam massa, a volutpat erat luctus sed. Quisque laoreet vehicula aliquam. Aliquam id ligula sem. Proin tristique dolor eget diam finibus imperdiet. Nunc in lacus elementum, maximus lectus in, fringilla nibh. Nullam pretium lacinia aliquam. Praesent purus nibh, dignissim quis est placerat, pretium venenatis ex. In ultrices ex a tortor dictum sagittis. Sed vel ipsum sapien.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className='nav-pills nb-5 justify-content-center align-items-center' id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    Tab Three
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard key={index} {...project} />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} className='background-image-right' alt="" />
    </section>
  )
}

export { Projects };