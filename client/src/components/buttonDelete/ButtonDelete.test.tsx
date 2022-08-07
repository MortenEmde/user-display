/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonDelete from './ButtonDelete';

const userData = {
  id: '10',
  name: {
    first: 'test',
    last: 'user',
  },
  phone: '0031610101010',
  email: 'test@user.com',
};

test('renders ButtonDelete element with correct title', () => {
  render(<ButtonDelete title="test delete button" userInfo={userData} />);
  const buttonDeleteElement = screen.getByText(/test delete button/i);
  expect(buttonDeleteElement).toBeInTheDocument();
});
