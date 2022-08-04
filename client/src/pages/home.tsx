import React from 'react';
import useUsersService from '../services/useUsersService';
import { Users } from '../types';

const Home: React.FC = () => {
  const usersService = useUsersService();

  const renderItems = (payload: Users) => {
    return payload.map(({id, name, phone, email}) => <tr key={id}>
      <td>{name.first}</td>
      <td>{name.last}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>)
  }

  return (
    <div>
      {usersService.status === 'loading' && <div>Loading...</div>}
      {usersService.status === 'loaded'
        && <table>
            <tbody>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>e-mail</th>
              </tr>
              {renderItems(usersService.payload)}
            </tbody>
          </table>
      }
      {usersService.status === 'error' && (
        <div>Error, the user data could not be found.</div>
      )}
    </div>
  );
};

export default Home;
