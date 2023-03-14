export interface User {
  user: string;
  password: string;
  role: 'admin | user | manager';
  [key: string]: any;
}

export interface Login {
  username: string;
  password: string;
}
