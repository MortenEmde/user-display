import React from 'react';
import { Link } from 'react-router-dom';
import deleteUserService from '../services/deleteUserService';
import { TableButtonProps } from '../types';
import './ButtonDelete.css';

const ButtonDelete: React.FC<TableButtonProps> = ({ title, userInfo }) => {
  return (
    <Link to={'/'}>
      <button
        className='delete-button'
        type='button'
        onClick={() => deleteUserService(userInfo.id)}
      >
        {title}
      </button>
    </Link>
  );
};

export default ButtonDelete;
