import React from 'react';

import Resume from '../assets/Stephen_Brundage_Resume.docx'
import './SocialBar.css';

export default function SocialBar() {
    return (
        <div className="social-container container">
            <a style={{zIndex: 1000}} href="https://www.linkedin.com/in/stevebrundage">
                <div class="bar-item-container">
                    <i class="fab fa-linkedin bar-item">
                        <p>LinkedIn</p>
                    </i>
                </div>
            </a>
            <a style={{zIndex: 1000}} href="https://github.com/sbrundage">
                <div class="bar-item-container">
                    <i class="fab fa-github-alt bar-item">
                        <p>Github</p>
                    </i>
                </div>
            </a>
            {/* <a style={{zIndex: 1000}} href="https://www.SteveBrundage.com/blog">
                <div class="bar-item-container">
                    <i class="far fa-keyboard bar-item">
                        <p>Blog</p>
                    </i>
                </div>
            </a> */}
            <a style={{zIndex: 1000}} href="https://twitter.com/SteveKBrundage">
                <div class="bar-item-container">
                    <i class="fa fa-twitter bar-item">
                        <p>Twitter</p>
                    </i>
                </div>
            </a>
            <a style={{zIndex: 1000}} href={Resume} download>
                <div class="bar-item-container">
                    <i class="fas fa-id-card bar-item">
                        <p>Resume</p>
                    </i>
                </div>
            </a>
        </div>
    );
}