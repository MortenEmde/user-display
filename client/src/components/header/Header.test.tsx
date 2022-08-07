/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Header element with correct title', () => {
  render(<Header title="test title" />);
  const headerElement = screen.getByText(/test title/i);
  expect(headerElement).toBeInTheDocument();
});
