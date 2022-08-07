/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import UsersTable from './UsersTable';

test('render UsersTable with header Loading... as default', () => {
  render(<UsersTable />);
  const UsersTableElement = screen.getByText(
    /Loading.../i,
  );
  expect(UsersTableElement).toBeInTheDocument();
});
