import React from 'react';
import { ModalProps } from '../types';
import EditForm from './EditForm';

const Modal: React.FC<ModalProps> = ({ toggleModal, userInfo }) => {
  return (
    <div className="modal">
      <div className="modal-header">
        <h5 className="modal-title">Edit data for {userInfo.name.first}</h5>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={toggleModal}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <EditForm userinfo={userInfo}/>
      </div>
    </div>
  );
};

export default Modal;
