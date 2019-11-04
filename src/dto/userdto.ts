import { Usertype } from './usertype';

export class UserDTO {
    id: number;
    username: string;
    password: string;
    userType: Usertype;
}
