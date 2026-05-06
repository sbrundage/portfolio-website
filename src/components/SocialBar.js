import React from 'react';

import Resume from '../assets/Stephen_Brundage_Resume.pdf';
import { LinkedInIcon, GitHubIcon, ResumeIcon, BlogIcon } from './Icons.js';
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
  {
    href: 'https://www.SteveBrundage.com/blog',
    label: 'Blog',
    Icon: BlogIcon,
  },
  {
    href: Resume,
    label: 'Resume',
    Icon: ResumeIcon,
    download: true,
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
          download={download || undefined}
        >
          <Icon />
          <span className="bar-item-label">{label}</span>
        </a>
      ))}
    </nav>
  );
}
