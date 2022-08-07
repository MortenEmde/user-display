/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidationMessage from './ValidationMessage';

test('renders TableItems with correct cells', () => {
  render(<ValidationMessage touch regexCheck={false} inputId="firstNameInput" />);
  const validationMessageElement = screen.getByText(/Please only use letters from A to Z/i);
  expect(validationMessageElement).toBeInTheDocument();
});
