import React from 'react';
import { ValidationMessageProps } from '../types';
import './ValidationMessage.css';

const ValidationMessage: React.FC<ValidationMessageProps> = ({
  touch, regexCheck, inputId,
}):JSX.Element | null => {
  if (touch) {
    if (!regexCheck && (inputId === 'firstNameInput' || inputId === 'lastNameInput')) {
      return (
        <p className="validation-error-message">
          Please only use letters from A to Z
        </p>
      );
    }
    if (!regexCheck && inputId === 'emailInput') {
      return (
        <p className="validation-error-message">
          Please use the correct format for an email: example@mail.com
        </p>
      );
    }
    if (!regexCheck && inputId === 'phoneInput') {
      return (
        <p className="validation-error-message">
          Please use the correct format for a Dutch phone number: 0612345678 or 0031612345678
        </p>
      );
    }
  }
  return null;
};

export default ValidationMessage;
