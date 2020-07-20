import React, { Component } from 'react';

import ProfileImage from '../assets/me.JPG';
import SocialBar from '../components/SocialBar.js';

import './Landing.css';

export default class Landing extends Component {
    render() {
        return (
            <div class="container-fluid custom-container">
                <div class="row custom-row">
                    <div class="col-sm-12 col-xl-4 custom-column">
                        <img src={ProfileImage} class="profileImage"/>
                    </div>
                    <div class="col-sm-12 col-xl-8 custom-column my-auto">
                        <div class="intro-section">
                            <h1>Hi, I am </h1>
                            <h2>Steve Brundage.</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
