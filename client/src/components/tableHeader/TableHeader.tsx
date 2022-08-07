import React from 'react';
import './TableHeader.css';

const TableHeader: React.FC = () => (
  <thead>
    <tr>
      <th className="table-header-cell">First Name</th>
      <th className="table-header-cell">Last Name</th>
      <th className="table-header-cell">e-mail</th>
      <th className="table-header-cell">Phone</th>
    </tr>
  </thead>
);

export default TableHeader;
