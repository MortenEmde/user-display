import React from 'react';
import { TableButtonProps } from '../types';

const buttonAction = (userId: string) => {
  return console.log(userId, 'Working!')
}

const ButtonDelete: React.FC<TableButtonProps> = ({ title, userInfo }) => {
  return (
    <td>
      <button
        type='button'
        onClick={() => buttonAction(userInfo.id)}
      >
        {title}
      </button>
    </td>
  );
};

export default ButtonDelete;
