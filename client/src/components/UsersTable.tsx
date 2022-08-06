import React from 'react';
import useUsersService from '../services/useUsersService';
import TableHeader from './TableHeader';
import TableItems from './TableItems';
import './UsersTable.css';

const UsersTable: React.FC = () => {
  const usersService = useUsersService();

  return (
    <>
      {usersService.status === 'loading' && <div>Loading...</div>}
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
        <div>Error, User data could not be found.</div>
      )}
    </>
  );
};

export default UsersTable;
