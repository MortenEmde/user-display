import React, { useState } from 'react';
import { TableButtonProps } from '../types';
import Modal from './Modal';

const ButtonEdit: React.FC<TableButtonProps> = ({ title, userInfo }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    showModal ? setShowModal(false) : setShowModal(true);
  };

  return (
    <td>
      <button
        type='button'
        onClick={toggleModal}
      >
        {title}
      </button>
      {showModal ? (
        <Modal
          toggleModal={toggleModal}
          userInfo={userInfo}
        />
      ) : null}
    </td>
  );
};

export default ButtonEdit;
