import { UserDTO } from './userdto';
import { CompanyDTO } from './companydto';

export class ArticleDTO {
    id: number;
    name: string;
    year: number;
    company: CompanyDTO;
    price: number;
    user: UserDTO;
}
