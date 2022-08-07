import React from 'react';
import { HeaderProps } from '../../types';
import './Header.css';

const Header: React.FC<HeaderProps> = ({ title }) => (
  <h3 className="header-title">{title}</h3>
);

export default Header;
