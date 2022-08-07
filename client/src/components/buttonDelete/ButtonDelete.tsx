import React from 'react';
import deleteUserService from '../../services/deleteUserService';
import { TableButtonProps } from '../../types';
import './ButtonDelete.css';

const ButtonDelete: React.FC<TableButtonProps> = ({ title, userInfo }) => (
  <button
    className="delete-button"
    type="button"
    onClick={() => deleteUserService(userInfo.id)}
  >
    {title}
  </button>
);

export default ButtonDelete;
