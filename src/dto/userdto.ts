import { Usertype } from './usertype';

export class UserDTO {
  [x: string]: any;
    id: number;
    username: string;
    firsName: string;
    lastName: string;
    login: string;
    userType: Usertype;
    email: string;
    authorities: string [];
    activated: boolean;

}
