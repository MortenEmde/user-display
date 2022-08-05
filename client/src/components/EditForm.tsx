import React from 'react';
import { User } from '../types';

interface EditFormProps {
  userinfo: User;
}


const EditForm: React.FC<EditFormProps> = ({ userinfo }) => {
  let firstNameField: HTMLInputElement | null;
  let lastNameField: HTMLInputElement | null;
  let emailField: HTMLInputElement | null;
  let phoneField: HTMLInputElement | null;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (
          firstNameField === null ||
          emailField === null ||
          phoneField === null
        ) {
          return alert('please fill in all fields');
        } else {
          console.log('Data updated!')
          // PUT CALL HERE
          // editEntity({
          //   variables: {
          //     name: nameField.value,
          //     type: typeOption.value,
          //     description: descriptionField.value,
          //     id: itemId,
          //   },
          // });
        }
      }}
    >
      <fieldset>
        <div>
          <label htmlFor="firstNameInput">First Name</label>
          <input
            type="text"
            id="firstNameInput"
            placeholder="Enter First Name"
            defaultValue={userinfo.name.first}
            required
            ref={(node) => {
              firstNameField = node;
            }}
          />
        </div>
        <div>
          <label htmlFor="lastNameInput">Last Name</label>
          <input
            type="text"
            id="lastNameInput"
            placeholder="Enter Last Name"
            defaultValue={userinfo.name.last}
            required
            ref={(node) => {
              lastNameField = node;
            }}
          />
        </div>
        <div>
          <label htmlFor="emailInput">e-mail</label>
          <input
            type="text"
            id="emailInput"
            placeholder="Enter e-mail Address"
            defaultValue={userinfo.email}
            required
            ref={(node) => {
              emailField = node;
            }}
          />
        </div>
        <div>
          <label htmlFor="phoneInput">Phone</label>
          <input
            type="text"
            id="phoneInput"
            placeholder="Enter Phone Number"
            defaultValue={userinfo.phone}
            required
            ref={(node) => {
              phoneField = node;
            }}
          />
        </div>
        <button type="submit">
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default EditForm;
