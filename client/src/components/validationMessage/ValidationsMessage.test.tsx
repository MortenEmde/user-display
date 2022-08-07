/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidationMessage from './ValidationMessage';

test('render ValidationMessage with correct text for firstNameInput', () => {
  render(<ValidationMessage touch regexCheck={false} inputId="firstNameInput" />);
  const validationMessageElement = screen.getByText(
    /Please only use letters from A to Z/i,
  );
  expect(validationMessageElement).toBeInTheDocument();
});

test('render ValidationMessage with correct text for lastNameInput', () => {
  render(<ValidationMessage touch regexCheck={false} inputId="lastNameInput" />);
  const validationMessageElement = screen.getByText(
    /Please only use letters from A to Z/i,
  );
  expect(validationMessageElement).toBeInTheDocument();
});

test('render ValidationMessage with correct text for emailInput', () => {
  render(<ValidationMessage touch regexCheck={false} inputId="emailInput" />);
  const validationMessageElement = screen.getByText(
    /Please use the correct format for an email: example@mail.com/i,
  );
  expect(validationMessageElement).toBeInTheDocument();
});

test('render ValidationMessage with correct text for phoneInput', () => {
  render(<ValidationMessage touch regexCheck={false} inputId="phoneInput" />);
  const validationMessageElement = screen.getByText(
    /Please use the correct format for a Dutch phone number: 0612345678 or 0031612345678/i,
  );
  expect(validationMessageElement).toBeInTheDocument();
});

test('should not render ValidationMessage if regexCheck is passing', () => {
  render(<ValidationMessage touch regexCheck inputId="firstNameInput" />);
  const validationMessageElement = screen.queryByText(
    /Please only use letters from A to Z/i,
  );
  expect(validationMessageElement).toBeNull();
});
