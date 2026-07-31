import React from 'react';

import { LinkedInIcon, GitHubIcon, ResumeIcon, WorkIcon } from './Icons.js';
import './SocialBar.css';

const links = [
  {
    href: 'https://www.linkedin.com/in/stevebrundage',
    label: 'LinkedIn',
    Icon: LinkedInIcon,
    external: true,
  },
  {
    href: 'https://github.com/sbrundage',
    label: 'GitHub',
    Icon: GitHubIcon,
    external: true,
  },
  // {
  //   href: 'https://www.SteveBrundage.com/blog',
  //   label: 'Blog',
  //   Icon: BlogIcon,
  //   external: true,
  // },
  {
    href: '/Stephen_Brundage_Resume.pdf',
    label: 'Resume',
    Icon: ResumeIcon,
    download: 'Stephen_Brundage_Resume.pdf',
  },
  {
    href: '/tutoring',
    label: 'iOS Tutoring',
    Icon: WorkIcon,
  },
];

export default function SocialBar() {
  return (
    <nav className="social-bar" aria-label="Social and contact links">
      {links.map(({ href, label, Icon, download, external }) => (
        <a
          key={label}
          href={href}
          className="bar-item"
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          download={download}
        >
          <Icon />
          <span className="bar-item-label">{label}</span>
        </a>
      ))}
    </nav>
  );
}
