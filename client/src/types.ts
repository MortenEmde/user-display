// custom types
export type User = {
  id: string;
  name: {
    first: string,
    last?: string
  };
  email: string;
  phone: string;
}

export type Users = Array<User>;

// custom props
export interface TableButtonProps {
  title: string;
  userInfo: User;
}

export interface ModalProps {
  toggleModal: (e: any) => void;
  userInfo: User;
}

// service type
interface ServiceInit {
  status: 'init';
}
interface ServiceLoading {
  status: 'loading';
}
interface ServiceLoaded<T> {
  status: 'loaded';
  payload: T;
}
interface ServiceError {
  status: 'error';
  error: Error;
}
export type Service<T> =
  | ServiceInit
  | ServiceLoading
  | ServiceLoaded<T>
  | ServiceError;
