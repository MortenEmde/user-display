import React from 'react';
import { HeaderProps } from '../types';
import './Header.css';

const Header: React.FC<HeaderProps> = ({ title }) => (
  <h5 className="header-title">{title}</h5>
);

export default Header;
