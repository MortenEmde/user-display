/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import EditForm from './EditForm';

const userData = {
  id: '10',
  name: {
    first: 'test',
    last: 'user',
  },
  email: 'fake@mail.com',
  phone: '0031610101010',
};

test('render EditForm with all input elements', () => {
  render(
    <BrowserRouter>
      <EditForm userInfo={userData} />
    </BrowserRouter>,
  );
  const InputFirstNameElement = screen.getByDisplayValue(/test/i);
  const InputLastNameElement = screen.getByDisplayValue(/user/i);
  const InputEmailElement = screen.getByDisplayValue(/fake@mail.com/i);
  const InputPhoneElement = screen.getByDisplayValue(/0031610101010/i);
  const InputSubmitElement = screen.getByDisplayValue(/Submit/i);
  expect(InputFirstNameElement).toBeInTheDocument();
  expect(InputLastNameElement).toBeInTheDocument();
  expect(InputEmailElement).toBeInTheDocument();
  expect(InputPhoneElement).toBeInTheDocument();
  expect(InputSubmitElement).toBeInTheDocument();
});
