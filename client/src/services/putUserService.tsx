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
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));
};

export default putUserService;
