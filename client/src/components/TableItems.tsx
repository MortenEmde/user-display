import React from 'react';
import { Users } from '../types';
import ButtonEdit from './ButtonEdit';
import ButtonDelete from './ButtonDelete';

interface TableItemsProps {
  users: Users;
}

const TableItems: React.FC<TableItemsProps> = ({ users }) => {

  const renderItems = (usersArr: Users) => {
    return usersArr.map((user) => {
      const {id, name, email, phone} = user;
      if (id && name && email && phone) {
        return <tr key={id}>
                  <td>{name.first}</td>
                  <td>{name.last}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <ButtonEdit title='&#9999;' userInfo={user} />
                  <ButtonDelete title='&#10006;' userInfo={user} />
               </tr>
      }
    });
  }

  return (
    <React.Fragment>
      {renderItems(users)}
    </React.Fragment>
  );
};

export default TableItems;
