import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import putUserService from '../services/putUserService';
import { EditFormProps } from '../types';
import ButtonDelete from './ButtonDelete';
import './EditForm.css';

const EditForm: React.FC<EditFormProps> = ({ userInfo }) => {
  const [firstName, setFirstName] = useState(userInfo.name.first);
  const [lastName, setLastName] = useState(userInfo.name.last);
  const [email, setEmail] = useState(userInfo.email);
  const [phone, setPhone] = useState(userInfo.phone);

  const [firstNameTouched, setFirstNameTouched] = useState(false);
  const [lastNameTouched, setLastNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);

  const history = useHistory();
  // check that only letters preset in first name
  const nameRegex = (name: string): boolean => /^[a-zA-Z]+$/.test(name);
  // check that email have correct format start@end.domain
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  // check that phone number is at least 10 digits (0612345678) and no more than 13 (0031612345678)
  const phoneRegex = /^[0-9]{10,13}$/.test(phone);

  const renderValidationError = (touch: boolean, regexCheck: boolean, inputId: string ):JSX.Element | null => {
    if (touch) {
      if (!regexCheck && (inputId === 'firstNameInput' || inputId === 'lastNameInput')) {
        return <p>Please only use letters from a to z</p>;
      }
      if (!regexCheck && inputId === 'emailInput') {
        return <p>Please use correct format for email: example@mail.com</p>;
      }
      if (!regexCheck && inputId === 'phoneInput') {
        return <p>Please use correct format for dutch phone number: 0612345678 or 0031612345678</p>;
      }
    }
    return null;
  };

  const submitChanges = (e: FormEvent): void => {
    e.preventDefault();

    if (!nameRegex || !emailRegex || !phoneRegex) {
      return alert('Please ensure you correctly filled in each field');
    }
    putUserService({
      id: userInfo.id,
      name: {
        first: firstName,
        last: lastName,
      },
      email,
      phone,
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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onBlur={() => setFirstNameTouched(true)}
            required
          />
          {renderValidationError(firstNameTouched, nameRegex(firstName), 'firstNameInput')}
        </label>
      </div>
      <div>
        <label htmlFor="lastNameInput">
          Last Name
          <input
            type="text"
            id="lastNameInput"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onBlur={() => setLastNameTouched(true)}
          />
          {lastName ? renderValidationError(lastNameTouched, nameRegex(lastName), 'lastNameInput') : null}
        </label>
      </div>
      <div>
        <label htmlFor="emailInput">
          e-mail
          <input
            type="text"
            id="emailInput"
            placeholder="Enter e-mail Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setEmailTouched(true)}
            required
          />
          {renderValidationError(emailTouched, emailRegex, 'emailInput')}
        </label>
      </div>
      <div>
        <label htmlFor="phoneInput">
          Phone
          <input
            type="text"
            id="phoneInput"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={13}
            onBlur={() => setPhoneTouched(true)}
            required
          />
          {renderValidationError(phoneTouched, phoneRegex, 'phoneInput')}
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
