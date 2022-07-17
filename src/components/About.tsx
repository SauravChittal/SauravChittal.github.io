import '../css_files/About.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faDiscord,
  } from "@fortawesome/free-brands-svg-icons";
import React, { useState } from 'react';
import { saveAs } from "file-saver";
import Ripple from './Helper/Ripple';
import { Document, Page, pdfjs } from 'react-pdf';
import emailJS from '@emailjs/browser';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import pdf from './Images/blank.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function About() {
    const [show, setShow] = useState(false);
    const [showResume, setShowResume] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleClick = () => {
        setShow(!show);
    }

    const handleResumeClick = () => {
        setShowResume(!showResume);
    }

    const defaultplug = defaultLayoutPlugin();

    return (
        <div className='about'>
            
            {/* <img src={pdf} alt="Hi fam" className='about-image' /> */}
            <h2>About Me</h2>
            <h5>
                Hello, I am Saurav Chittal, from India, and I'm a junior at University of Illinois - Urbana-Champaign.
                I am a full-stack web developer with a passion for creating beautiful and functional websites.
                I'm currently looking for software engineering internships.
            </h5>
            <hr className='about-line'/>
            <div className='education'>
            <h2>Education</h2>
            <h4 className='Bachelor'>Bachelor in Science in Mathematics</h4>
            <h6>August 2020 - May 2024</h6>
            
            <p className='align-right'>
                I'm currently working on my Bachelor's degree in Mathematics along with a minor in Computer Science.
                <br />
                <button onClick={handleClick} className='button'>List of Courses I've taken</button>
                {show && <div className='courses align-right'>
                    <h5>The list of all my courses taken so far is:</h5>
                        <ul>
                            <li>CS125: Introduction to Computer Science</li>
                            <li>MATH 241: Calculus III</li>
                            <li>CS 128: Introduction to Computer Science II</li>
                            <li>MATH 347H: Honors Introduction to Proofs</li>
                            <li>CS 225: Data Structures and Algorithms</li>
                            <li>CS 233: Computer Architecture</li>
                            <li>MATH 416: Linear Algebra</li>
                            <li>CS 374: Algorithms and Data Structures</li>
                            <li>MATH 417: Abstract Algebra</li>
                        </ul>
                    </div>}
            </p>
            </div>
            <hr className='about-line' />
            

            <h2>Experience</h2>
            <ul className='align-right'>
                <li>Course Associate for CS 124</li>
                    <ul>
                        <li>Hosted Office Hours for 500+ students to reinforce their knowledge on fundamental JavaProgramming concepts</li>
                        <li>Produced over 3+ walkthroughs on topics over Imperative Programming, Object OrientedProgramming and Data Structures</li>
                    </ul>
                <li>Summer of Side Projects</li>
                    <ul>
                        <li>Conducted social media outreach that resulted in over 400+ student sign ups</li>
                        <li>Led workshop for 20+ participants on how to develop side projects and be productive</li>
                        <li>Mentored students by providing them weekly feedback on their project submissions</li>
                    </ul>
            </ul>
            <hr className='about-line' />
            <h2>Resume</h2>
            <p className='align-right'><button onClick={handleResumeClick} className='button'>Click Here to Show Resume</button></p>
            {showResume && <Document file={pdf}>
                <Page pageNumber={1} />    
            </Document>}
            <hr className='about-line' />
            <h2>Contact</h2>
            <p>Phone: +1 (217) 953-2146</p>
            <p>Email: chittal3@illinois</p>
            <h6>Name:</h6>
            <div className='align-right'>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setName(e.target.value)}}></input>
                <h6>Email*:</h6>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setEmail(e.target.value)}}></input>
                <h6>Message:</h6>
                <textarea onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {setMessage(e.target.value)}}></textarea>
                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault();
                    const k = function validateEmail(email: string) {
                        var re = /\S+@\S+\.\S+/;
                        return re.test(email);
                    }
                    if (email.trim() === "" || !k(email)) {
                        alert("Please enter an email");
                    } else {
                        let tempParms = {
                            name,
                            email,
                            message,
                        }
                        emailJS.send('service_e32n25e', 'template_babpfg7', tempParms, 'orr7a_bu0yfTvefyn');
                        alert("Thank you for your message! I will get back to you as soon as possible!");
                        setName('');
                        setEmail('');
                        setMessage('');
                    }
                }} className='button' id='button'>Send</button>
            </div>
        </div>
    );
}