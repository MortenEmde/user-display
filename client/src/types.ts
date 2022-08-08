// custom types
// type structure for single user data
export type User = {
  id: string;
  name: {
    first: string,
    last?: string
  };
  email: string;
  phone: string;
}
// type structure for array of user(s) data
export type Users = Array<User>;

// custom props
export interface EditProps {
  location: {
    state: User;
  };
}
export interface HeaderProps {
  title: string;
}
export interface TableItemsProps {
  users: Users;
}
export interface EditFormProps {
  userInfo: User;
}
export interface TableButtonProps {
  title: string;
  userInfo: User;
}
export interface ValidationMessageProps {
  touch: boolean,
  regexCheck: boolean,
  inputId: string,
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
