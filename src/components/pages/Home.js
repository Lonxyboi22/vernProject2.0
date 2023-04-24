import "bulma/css/bulma.min.css";
import React, { Component } from 'react';

const Home = (props) => {
    return (
    <div>
        <div className="columns background">
            <div className="column is-3 column-background has-text-grey-light">
                <img style={{ borderRadius: 10, width: 240, height: 300 }} src={require('../images/Headshot_Babey.png')}>
                </img>
                <p className="bd-notification">Back Stabbath<br/>-Vern Planck</p>
            </div>
            <div className="column is-4 column-background has-text-grey-light">
                <p className="bd-notification">Welcome to my art portfolio page! This is to help get my artworks out into the world, check out my work in the works page. You can also visit the contact page for questions about my pieces or for commission works. Check out more of my work in my social media links. 
                </p>
            </div>
            <div className="column column-background">
                <div className="sideBar-backdrop has-text-light">
                <h3 style={{ display: "flex", justifyContent: "center", fontSize: "25px"}}>Socials:</h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <ul className="footer-icons" style={{ listStyleType: "none", margin: 0, padding: 0, overflow: "hidden"}}>
                        <li className="social-icons" style={{   float: "left" }}>
                            <a href="https://www.linkedin.com/in/vern-planck/" style={{ display:"block", padding: 10 }}>
                                <img style={{ width: 50, height: 50 }} src={require('../images/linkedin.png')}>
                                </img>
                            </a>
                        </li>
                        <li className="social-icons" style={{   float: "left" }}>
                            <a href="https://www.instagram.com/bakstabbath.art/" style={{ display:"block", padding: 10 }}>
                            <img style={{ width: 50, height: 50 }} src={require('../images/instagram.png')}>
                            </img>
                            </a>
                        </li>
                    </ul>
                </div>
                </div>
                <div className="sideBar-backdrop2 has-text-light">
                <h3 style={{ display: "flex", justifyContent: "center", fontSize: "25px"}}>Socials:</h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <ul className="footer-icons" style={{ listStyleType: "none", margin: 0, padding: 0, overflow: "hidden"}}>
                        <li className="social-icons" style={{   float: "left" }}>
                            <a href="https://www.linkedin.com/in/vern-planck/" style={{ display:"block", padding: 10 }}>
                                <img style={{ width: 50, height: 50 }} src={require('../images/linkedin.png')}>
                                </img>
                            </a>
                        </li>
                        <li className="social-icons" style={{   float: "left" }}>
                            <a href="https://www.instagram.com/bakstabbath.art/" style={{ display:"block", padding: 10 }}>
                            <img style={{ width: 50, height: 50 }} src={require('../images/instagram.png')}>
                            </img>
                            </a>
                        </li>
                    </ul>
                </div>
                </div>
                <div className="sideBar-backdrop3 has-text-light">
                <h3 style={{ display: "flex", justifyContent: "center", fontSize: "25px"}}>Socials:</h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <ul className="footer-icons" style={{ listStyleType: "none", margin: 0, padding: 0, overflow: "hidden"}}>
                        <li className="social-icons" style={{   float: "left" }}>
                            <a href="https://www.linkedin.com/in/vern-planck/" style={{ display:"block", padding: 10 }}>
                                <img style={{ width: 50, height: 50 }} src={require('../images/linkedin.png')}>
                                </img>
                            </a>
                        </li>
                        <li className="social-icons" style={{   float: "left" }}>
                            <a href="https://www.instagram.com/bakstabbath.art/" style={{ display:"block", padding: 10 }}>
                            <img style={{ width: 50, height: 50 }} src={require('../images/instagram.png')}>
                            </img>
                            </a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
  
  export default Home