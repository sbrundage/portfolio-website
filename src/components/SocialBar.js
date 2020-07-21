import React from 'react';

import './SocialBar.css';

export default function SocialBar() {
    return (
        <div className="social-container container">
            <a style={{zIndex: 1000}} href="https://www.linkedin.com/in/stevebrundage">
                <i class="fab fa-linkedin bar-item" ></i>
            </a>
            <a style={{zIndex: 1000}} href="https://github.com/sbrundage">
                <i class="fab fa-github-alt bar-item"></i>
            </a>
            <a style={{zIndex: 1000}} href="https://www.SteveBrundage.com/blog">
                <i class="far fa-keyboard bar-item"></i>
            </a>
            <a style={{zIndex: 1000}} href="https://twitter.com/SteveKBrundage">
                <i class="fa fa-twitter bar-item"></i>
            </a>
            {/* <a style={{zIndex: 1000}} href=""> */}
                <i class="fas fa-id-card bar-item"></i>
            {/* </a> */}
        </div>
    );
}