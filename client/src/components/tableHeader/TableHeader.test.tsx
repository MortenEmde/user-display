/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';

test('renders TableHeader with correct elements', () => {
  render(<table><TableHeader /></table>);
  const firstNameElement = screen.getByText(/First Name/i);
  const lastNameElement = screen.getByText(/Last Name/i);
  const emailElement = screen.getByText(/e-mail/i);
  const phoneElement = screen.getByText(/Phone/i);
  expect(firstNameElement).toBeInTheDocument();
  expect(lastNameElement).toBeInTheDocument();
  expect(emailElement).toBeInTheDocument();
  expect(phoneElement).toBeInTheDocument();
});
