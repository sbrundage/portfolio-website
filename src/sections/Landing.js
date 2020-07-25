import React, { Component } from 'react';

import ProfileImage from '../assets/me.JPG';
import SocialBar from '../components/SocialBar.js';

// import './Landing.css';
import './NewLanding.css'

export default class Landing extends Component {
    render() {
        return (
            <div class="container-fluid custom-container">
                <div class="row">
                    <div class="profile-image-col col-sm-12 col-xl-5">
                        <img src={ProfileImage} class="profileImage"/>
                    </div>
                    <div class="intro-text-col col-sm-12 col-xl-7 my-auto">
                        <div class="intro-section">
                            <h1>Hi, I am </h1>
                            <h2>Steve Brundage.</h2>
                        </div>
                        <div class="type-writer-section">
                            <p class="line-1 typing-text">A Software Engineer specializing</p>
                            <p class="line-2 typing-text"> in iOS Development.</p>
                        </div>
                    </div>
                </div>
                <div className="social-bar">
                    <SocialBar />
                </div>
            </div>
        )
    }
}
