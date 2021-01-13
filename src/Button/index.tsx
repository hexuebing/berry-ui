import React from 'react';
import './index.css';

interface ButtonOptions {
  title: string;
  href: string;
  onClick: () => void;
}

export default ({ title, href, onClick }: ButtonOptions) => (
  <a className="light-btn" href={href} onClick={onClick}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    {title}
  </a>
);
