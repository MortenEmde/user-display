import React from 'react';
import { Link } from 'react-router-dom';
import { TableItemsProps, Users } from '../types';

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
          <td>
            <Link to={{ pathname: '/edit', state: user }}>
              { name.first }
            </Link>
          </td>
          <td>
            <Link to={{ pathname: '/edit', state: user }}>
              { name.last }
            </Link>
          </td>
          <td>
            <Link to={{ pathname: '/edit', state: user }}>
              { email }
            </Link>
          </td>
          <td>
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
