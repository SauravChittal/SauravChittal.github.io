import '../css_files/Main-Page.css';
import { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faDiscord,
  } from "@fortawesome/free-brands-svg-icons";
import jpg from './Images/5834.jpg'

export default function App() {

    return (
        <div className="App" id="outer-container">
            <h1 id='main'>Hello</h1>
            <h2 id='main2'>A bit about me</h2>
            <h4 id='main3'>I am Saurav Chittal, an undergraduate student majoring in Mathematics at University of Illinois - Urbana Champaign, and I’m graduating in May 2024</h4>
            <img src={jpg} className='img' />
            <Nav>
                <LinkContainer to="about">
                    <button type="button" id='btn1' className={`btn btn-outline-primary`}>About</button>
                </LinkContainer>
                    {/* <LinkContainer to="education-and-experience">
                        <button type="button" id='btn2' className={`btn btn-outline-primary`}>Education And Experience</button>
                    </LinkContainer> */}
                <LinkContainer to="projects">
                    <button type="button" id='btn3' className={`btn btn-outline-primary`}>Projects</button>
                </LinkContainer>
            </Nav>
            
        </div>
    )
}