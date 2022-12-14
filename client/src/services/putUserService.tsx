import { ServerUrl } from '../serverURL';
import { User } from '../types';

const putUserService = (userInfo: User): void => {
  const {
    id,
    name,
    email,
    phone,
  } = userInfo;
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id,
      name: {
        first: name.first,
        last: name.last,
      },
      phone,
      email,
    }),
  };
  fetch(`${ServerUrl}/api/users/${id}`, requestOptions)
    .catch((error) => error.log(error));
};

export default putUserService;
