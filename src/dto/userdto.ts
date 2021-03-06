import { Usertype } from './usertype';

export class UserDTO {

    id: number;
    firstName: string;
    lastName: string;
    login: string;
    password: string;
    userType: Usertype;
    email: string;
    authorities: string [];
    activated: boolean;

}
