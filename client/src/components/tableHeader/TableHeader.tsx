import React from 'react';
import './TableHeader.css';

const headerItems = ['First Name', 'Last Name', 'e-mail', 'Phone'];

const TableHeader: React.FC = () => (
  <thead>
    <tr>
      {headerItems.map((item) => <th className="table-header-cell" key={item}>{item}</th>)}
    </tr>
  </thead>
);

export default TableHeader;
