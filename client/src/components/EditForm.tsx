import React, { FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import putUserService from '../services/putUserService';
import { EditFormProps } from '../types';
import ButtonDelete from './ButtonDelete';
import './EditForm.css';

const EditForm: React.FC<EditFormProps> = ({ userInfo }) => {
  const history = useHistory();
  let firstNameField: HTMLInputElement | null;
  let lastNameField: HTMLInputElement | null;
  let emailField: HTMLInputElement | null;
  let phoneField: HTMLInputElement | null;

  const submitChanges = (e: FormEvent): void => {
    e.preventDefault();
    if (
      firstNameField === null
      || lastNameField === null
      || emailField === null
      || phoneField === null
    ) {
      return alert('please fill in all fields');
    }
    putUserService({
      id: userInfo.id,
      name: {
        first: firstNameField.value,
        last: lastNameField.value,
      },
      email: emailField.value,
      phone: phoneField.value,
    });
    return history.push('/');
  };

  return (
    <form
      onSubmit={submitChanges}
    >
      <div>
        <label htmlFor="firstNameInput">
          First Name
          <input
            type="text"
            id="firstNameInput"
            placeholder="Enter First Name"
            defaultValue={userInfo.name.first}
            required
            ref={(node) => {
              firstNameField = node;
            }}
          />
        </label>
      </div>
      <div>
        <label htmlFor="lastNameInput">
          Last Name
          <input
            type="text"
            id="lastNameInput"
            placeholder="Enter Last Name"
            defaultValue={userInfo.name.last}
            required
            ref={(node) => {
              lastNameField = node;
            }}
          />
        </label>
      </div>
      <div>
        <label htmlFor="emailInput">
          e-mail
          <input
            type="text"
            id="emailInput"
            placeholder="Enter e-mail Address"
            defaultValue={userInfo.email}
            required
            ref={(node) => {
              emailField = node;
            }}
          />
        </label>
      </div>
      <div>
        <label htmlFor="phoneInput">
          Phone
          <input
            type="text"
            id="phoneInput"
            placeholder="Enter Phone Number"
            defaultValue={userInfo.phone}
            required
            ref={(node) => {
              phoneField = node;
            }}
          />
        </label>
      </div>
      <div className="form-buttons">
        <input className="submit-button" type="submit" value="Submit" />
        <ButtonDelete title="Delete User &#10006;" userInfo={userInfo} />
      </div>
    </form>
  );
};

export default EditForm;