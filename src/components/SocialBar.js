import React from 'react';

import { LinkedInIcon, GitHubIcon, ResumeIcon } from './Icons.js';
import './SocialBar.css';

const links = [
  {
    href: 'https://www.linkedin.com/in/stevebrundage',
    label: 'LinkedIn',
    Icon: LinkedInIcon,
  },
  {
    href: 'https://github.com/sbrundage',
    label: 'GitHub',
    Icon: GitHubIcon,
  },
  // {
  //   href: 'https://www.SteveBrundage.com/blog',
  //   label: 'Blog',
  //   Icon: BlogIcon,
  // },
  {
    href: '/Stephen_Brundage_Resume.pdf',
    label: 'Resume',
    Icon: ResumeIcon,
    download: 'Stephen_Brundage_Resume.pdf',
  },
];

export default function SocialBar() {
  return (
    <nav className="social-bar" aria-label="Social and contact links">
      {links.map(({ href, label, Icon, download }) => (
        <a
          key={label}
          href={href}
          className="bar-item"
          target={download ? undefined : '_blank'}
          rel={download ? undefined : 'noopener noreferrer'}
          download={download}
        >
          <Icon />
          <span className="bar-item-label">{label}</span>
        </a>
      ))}
    </nav>
  );
}
