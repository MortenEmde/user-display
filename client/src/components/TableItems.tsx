import React from 'react';
import { Link } from 'react-router-dom';
import { TableItemsProps, Users } from '../types';
import './TableItems.css';

const TableItems: React.FC<TableItemsProps> = ({ users }) => {
  const renderRows = (usersArr: Users): (JSX.Element | undefined)[] => usersArr.map((user) => {
    const {
      id,
      name,
      email,
      phone,
    } = user;
    if (id && name && email && phone) {
      return (
        <tr key={id}>
          <td className="table-cell">
            <Link to={{ pathname: '/edit', state: user }}>
              { name.first }
            </Link>
          </td>
          <td className="table-cell">
            <Link to={{ pathname: '/edit', state: user }}>
              { name.last }
            </Link>
          </td>
          <td className="table-cell">
            <Link to={{ pathname: '/edit', state: user }}>
              { email }
            </Link>
          </td>
          <td className="table-cell">
            <Link to={{ pathname: '/edit', state: user }}>
              { phone }
            </Link>
          </td>
        </tr>
      );
    }
    return undefined;
  });

  return (
    <>
      {renderRows(users)}
    </>
  );
};

export default TableItems;
