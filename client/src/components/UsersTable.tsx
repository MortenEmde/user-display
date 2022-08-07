import React from 'react';
import useUsersService from '../services/useUsersService';
import TableHeader from './TableHeader';
import TableItems from './TableItems';
import './UsersTable.css';

const UsersTable: React.FC = () => {
  const usersService = useUsersService();

  return (
    <>
      {usersService.status === 'loading' && <h4 className="loading">Loading...</h4>}
      {usersService.status === 'loaded'
       && (
         <table className="users-table">
           <TableHeader />
           <tbody>
             <TableItems users={usersService.payload} />
           </tbody>
         </table>
       )}
      {usersService.status === 'error' && (
        <h4 className="data-error">Error, User data could not be found.</h4>
      )}
    </>
  );
};

export default UsersTable;
