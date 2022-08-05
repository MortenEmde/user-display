import { ServerUrl } from '../serverURL';
import { User } from '../types';

const putUserService = (userInfo: User) => { 
  const { id, name, email, phone } = userInfo;
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: id,
      name: {
        first: name.first,
        last: name.last
      },
      phone: phone,
      email: email
    })
  };
  fetch(`${ServerUrl}/api/users/${id}`, requestOptions)
    .catch((error) => console.log(error));
};

export default putUserService;
