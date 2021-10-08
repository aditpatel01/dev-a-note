import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Row,
  Card,
  Col,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import udain from "../images/udain.jpg";
import saurabh from "../images/saurabh.png";
import madhavendra from "../images/madhavendra.jpeg";
import adit from "../images/adit.jfif";
import suryansh from "../images/suryansh.jpg";

export default function about() {
    return (
        <div>
            <section id="team">
        <h2 className="team"> Meet Our Team</h2>

        <Row>
          <Col>
            <Card style={{ width: "18rem", marginLeft:"23rem"}}>
              <Card.Img variant="top" src={udain} />
              <Card.Body>
                <Card.Title>Udain Srivastava</Card.Title>
                <Button style={{ marginBottom: "5px" }} variant="primary" href="https://github.com/Udain123">
                  GITHUB
                </Button>
                <Button
                  variant="primary"
                  href="https://www.linkedin.com/in/udain-srivastava-6ba848168"
                >
                  LINKEDIN
                </Button>
              </Card.Body>
            </Card>
          </Col>
          
          <Col>
            <Card style={{ width: "18rem", marginLeft:"7rem" }}>
              <Card.Img variant="top" src={saurabh} />
              <Card.Body>
                <Card.Title>Saurabh Dua</Card.Title>

                <Button style={{ marginBottom: "5px" }} variant="primary" href="https://github.com/sdua-create">GITHUB</Button>
                <Button
                  variant="primary"
                  href="https://www.linkedin.com/in/saurabh-dua-75766b18b/"
                >
                  LINKEDIN
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
           
            <Card style={{ width: "18rem", marginLeft:"7rem", marginTop: "10px"}}>
              <Card.Img variant="top" src={madhavendra}  />
              <Card.Body>
                <Card.Title>Madhavendra Srivastava</Card.Title>

                <Button
                 style={{ marginBottom: "5px" }}
                  variant="primary"
                  href="https://github.com/Madhavendra21"
                >
                  GITHUB
                </Button>
                <Button
                  variant="primary"
                  href="https://www.linkedin.com/in/madhavendra-srivastava-20753818b"
                >
                  LINKEDIN
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "18rem", marginLeft:"7rem", marginTop: "10px"}}>
              <Card.Img variant="top" src={adit} />
              <Card.Body>
                <Card.Title>Adit Patel</Card.Title>

                <Button style={{ marginBottom: "5px" }} variant="primary" href="https://github.com/aditpatel01">GITHUB</Button>
                <Button variant="primary" href="https://www.linkedin.com/in/adit-patel-03551518b">LINKEDIN</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "18rem", marginLeft:"7rem", marginTop: "10px"}}>
              <Card.Img variant="top" style={{ height: "286px" }} src={suryansh} />
              <Card.Body>
                <Card.Title>Suryansh Shrivastava</Card.Title>

                <Button style={{ marginBottom: "5px" }} variant="primary" href="https://github.com/SSuryans">GITHUB</Button>
                <Button variant="primary" href="www.linkedin.com/in/suryansh-shrivastava-19762321b">LINKEDIN</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
        </div>
    )
}