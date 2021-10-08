import React from "react";
import {
    Navbar,
    Nav,
    NavDropdown,
    Carousel,
  } from "react-bootstrap";

function Home(){
    return (
        <>
            <header>
                <div className="wrapper">
                    <div className="head-div">
                        <div className= "logo">Demo</div>
                        <div className="logo_x">Editor</div>
                    </div>
                    <div className="menu-div">
                        <Nav className="menu ">
                            <Nav.Link className="menu-link" style={{ color: 'black' }} href="/About">ABOUT</Nav.Link>
                            <Nav.Link className="menu-link" style={{ color: 'black' }} href="https://notifysite.netlify.app/">NOTIFY</Nav.Link>
                            <Nav.Link className="menu-link" style={{ color: 'black' }} href="https://ssuryans.github.io/Web-Compiler/">DEVIFY</Nav.Link>
                        </Nav>
                    </div>
                </div>
                <div className ="text">
                    <h1>Code on the go</h1>
                    <p>Fix the World with 0s and 1s</p> 
                    <a href="https://notifysite.netlify.app/">Notify</a>
                    <a style={{ marginLeft:"5px" }} href="https://ssuryans.github.io/Web-Compiler/">Devify</a>
                </div>
            </header> 
        </>
    )
}

export default Home;


{/* <ul className="menu ">
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">NOTIFY</a></li>
                        <li><a href="#">COMPIFY</a></li>
                        <li><a href="#">DEVIFY</a></li> 
                    </ul> */}