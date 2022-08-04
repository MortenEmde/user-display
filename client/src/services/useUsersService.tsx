import { useEffect, useState } from 'react';
import { Users, Service } from '../types';
import { ServerUrl } from '../serverURL';

const useUsersService = (): Service<Users> => {
  const [users, setUsers] = useState<Service<Users>>({
    status: 'loading',
  });

  useEffect(() => {
    fetch(`${ServerUrl}/api/users`)
      .then((res) => res.json())
      .then((res) => setUsers({ status: 'loaded', payload: res }))
      .catch((error) => setUsers({ status: 'error', error }));
  }, []);
  
  return users;
};

export default useUsersService;
