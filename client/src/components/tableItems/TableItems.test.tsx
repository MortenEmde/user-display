/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TableItems from './TableItems';

const usersData = [{
  id: '10',
  name: {
    first: 'test',
    last: 'user',
  },
  email: 'fake@mail.com',
  phone: '0031610101010',
}];

const usersDataMissing = [{
  id: '10',
  name: {
    first: 'test',
    last: 'user',
  },
  email: '',
  phone: '0031610101010',
}];

test('renders TableItems with correct cells', () => {
  render(
    <BrowserRouter>
      <table>
        <tbody>
          <TableItems users={usersData} />
        </tbody>
      </table>
    </BrowserRouter>,
  );
  const firstNameCellElement = screen.getByText(/test/i);
  const lastNameCellElement = screen.getByText(/user/i);
  const emailCellElement = screen.getByText(/fake@mail.com/i);
  const phoneCellElement = screen.getByText(/0031610101010/i);
  expect(firstNameCellElement).toBeInTheDocument();
  expect(lastNameCellElement).toBeInTheDocument();
  expect(emailCellElement).toBeInTheDocument();
  expect(phoneCellElement).toBeInTheDocument();
});

test('should not render TableItems if data is missing in user', () => {
  render(
    <BrowserRouter>
      <table>
        <tbody>
          <TableItems users={usersDataMissing} />
        </tbody>
      </table>
    </BrowserRouter>,
  );
  const firstNameCellElement = screen.queryByText(/test/i);
  const lastNameCellElement = screen.queryByText(/user/i);
  const emailCellElement = screen.queryByText(/fake@mail.com/i);
  const phoneCellElement = screen.queryByText(/0031610101010/i);
  expect(firstNameCellElement).toBeNull();
  expect(lastNameCellElement).toBeNull();
  expect(emailCellElement).toBeNull();
  expect(phoneCellElement).toBeNull();
});
