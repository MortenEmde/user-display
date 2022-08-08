import { ServerUrl } from '../serverURL';

const deleteUserService = (userId: string):void => {
  fetch(`${ServerUrl}/api/users/${userId}`, { method: 'DELETE' })
    .catch((error) => error.log(error));
};

export default deleteUserService;
