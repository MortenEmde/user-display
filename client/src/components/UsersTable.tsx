import React from 'react';
import useUsersService from '../services/useUsersService';
import TableHeader from './TableHeader';
import TableItems from './TableItems';

const UsersTable: React.FC = () => {
  const usersService = useUsersService();

  return (
    <React.Fragment>
      {usersService.status === 'loading' && <div>Loading...</div>}
      {usersService.status === 'loaded'
       && <table>
            <TableHeader />
            <tbody>
              <TableItems users={usersService.payload} />
            </tbody>
          </table>
      }
      {usersService.status === 'error' && (
        <div>Error, User data could not be found.</div>
      )}
    </React.Fragment>
  );
};

export default UsersTable;
