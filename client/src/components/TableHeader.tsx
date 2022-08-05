import React from 'react';

const TableHeader: React.FC = () => {

  return (
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Phone</th>
        <th>e-mail</th>
        <td>Edit</td>
        <td>Delete</td>
      </tr>
    </thead>
  );
};

export default TableHeader;
