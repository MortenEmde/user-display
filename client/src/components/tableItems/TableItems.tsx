import React from 'react';
import { Link } from 'react-router-dom';
import { TableItemsProps, Users, User } from '../../types';
import './TableItems.css';

const TableItems: React.FC<TableItemsProps> = ({ users }) => {
  const renderCells = (itemArr: (string | undefined)[], user: User): JSX.Element[] => itemArr.map((item) => (
    <td className="table-cell" key={item}>
      <Link to={{ pathname: '/edit', state: user }}>
        { item }
      </Link>
    </td>
  ));

  const renderRows = (usersArr: Users): (JSX.Element | undefined)[] => usersArr.map((user) => {
    const {
      id,
      name,
      email,
      phone,
    } = user;
    if (id && name && email && phone) {
      const itemsArray = [name.first, name.last, email, phone];
      return (
        <tr key={id}>
          {renderCells(itemsArray, user)}
        </tr>
      );
    }
    // dont render a row if data in user object is incompleate
    return undefined;
  });

  return (
    <>
      {renderRows(users)}
    </>
  );
};

export default TableItems;
