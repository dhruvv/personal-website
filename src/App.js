import React from 'react';
import './App.css';
import './bootstrap.min.css';
import {Card, CardDeck, Carousel, Container, Nav, Navbar} from 'react-bootstrap';
import Background from "./download.webp"
import Subhankar from "./subhankar.JPG"
import Me from "./me2.jpg"
import './Arrows.scss';


var sectionStyleHome = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${Background})`
};

const ScrollDownArrows = () => {
  return (
      <a href="#aboutme" class="arrow-container">
      <div class="arrow"></div>
      <div class="arrow"></div>
      <div class="arrow"></div>  
      </a>

  );
};

const TopMenuBar = () => {
  return (
    <Navbar collapseOnSelect variant="dark" expand="lg" id="navbar" bg="bg-transparent"fixed="bottom">
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav">
      <Nav classname="mr-auto">
        <Nav.Item>
         <Nav.Link href="#home" id="link1">Home</Nav.Link>
        </Nav.Item> 
      <Nav.Item>
        <Nav.Link href="#aboutme" id="link2">About Me</Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav.Item>
        <Nav.Link href="#myprojects" id="link3">My Projects</Nav.Link>  
      </Nav.Item>
      </Navbar.Collapse>
    </Navbar>
  );
};

const HomeScreen = () => {
  return (
    <div style = {sectionStyleHome} id="home">
    <Container fluid id="mainDiv">
        <div class="center">
        <span><center>
          <h1>Hello, world!</h1>
          <h4>I'm Dhruv Venkataraman</h4>
          </center></span>
        </div>
        <div id="bottom">
          <center>
            <ScrollDownArrows></ScrollDownArrows>
          </center>
        </div>
    </Container>
    </div>
  );
};

const AboutMePage = () => {
  return (
    <div>
    <div id="aboutme">
      <Container fluid id="aboutMeMainDiv">
      <div className="headingDiv">
        <center><h1>About Me</h1></center>
      </div>
      <div id="cardDeck">
        <CardDeck>
        <Card bg="transparent" text="light">
          <Card.Img id="meImage" src={Me} />
        </Card>
        <Card bg="dark" text="light">
        <Card.Body>

         <Card.Title className="h1">Hi, I'm Dhruv Venkataraman</Card.Title>
        <Card.Text>
          <p className="codeBlock">
          I'm a 17 year old coder from Bangalore, India. 
            </p>
        </Card.Text>
    </Card.Body>
        </Card>
        </CardDeck>
      </div>
      </Container>
    </div>
    </div>
  );
};

const MyProjectsPage = () => {
  return(
    <div className="parentDiv" >
    <div id="myprojects">
      <Container fluid>
        <div >
        <center><h1>My Projects</h1></center>
        </div>
        <div id="myProjectsCarousel">
          <center>
        <Carousel>
          <Carousel.Item>
            <img
              className="slidesimages"
              src={Subhankar}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>Project 1</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slidesimages"
              src="https://images.unsplash.com/photo-1520371764250-8213f40bc3ed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>Project 2</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slidesimages"
              src="https://images.unsplash.com/photo-1520371764250-8213f40bc3ed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>Project 3</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </center>
        </div>
      </Container>
    </div>
    </div>
  );
};


  function App() {
    return (
      <div>
      <HomeScreen></HomeScreen>
      <AboutMePage></AboutMePage>
      <MyProjectsPage></MyProjectsPage>
      <TopMenuBar></TopMenuBar>
      </div>
    );
  };


export default App;
