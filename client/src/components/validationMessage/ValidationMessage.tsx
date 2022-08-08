import React from 'react';
import { ValidationMessageProps } from '../../types';
import './ValidationMessage.css';

const renderValidationErrorMessage = (message: string): JSX.Element => (
  <p className="validation-error-message">
    {message}
  </p>
);

const ValidationMessage: React.FC<ValidationMessageProps> = ({
  touch, regexCheck, inputId,
}):JSX.Element | null => {
  // check if associated input field have been touched during edit and if input value is validated by regexCheck.
  if (!touch || regexCheck) {
    return null;
  }
  if (inputId === 'firstNameInput' || inputId === 'lastNameInput') {
    return renderValidationErrorMessage('Please only use letters from A to Z');
  }
  if (inputId === 'emailInput') {
    return renderValidationErrorMessage('Please use the correct format for an email: example@mail.com');
  }
  if (inputId === 'phoneInput') {
    return renderValidationErrorMessage(
      'Please use the correct format for a Dutch phone number: 0612345678 or 0031612345678',
    );
  }
  return null;
};

export default ValidationMessage;
