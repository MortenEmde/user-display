import { ServerUrl } from '../serverURL';

const deleteUserService = (userId: string):void => {
  fetch(`${ServerUrl}/api/users/${userId}`, { method: 'DELETE' })
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));
};

export default deleteUserService;
