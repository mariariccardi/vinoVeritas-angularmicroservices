import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDTO } from 'src/dto/userdto';
import { Observable } from 'rxjs';
import { LoginDTO } from 'src/dto/logindto';
import { AbstractService } from './abstractservice';

@Injectable({
    providedIn: 'root'
})

export class UserService extends AbstractService<UserDTO> {

  constructor(http: HttpClient) {
    super(http);
    this.type = 'api/users';
  }

  login(loginDTO: LoginDTO): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/authenticate', loginDTO);
  }

  getAccount(): Observable<UserDTO> {
    let heads = {'Authorization': 'Bearer ' + localStorage.getItem('id_token')};
    return this.http.get<any>('http://localhost:8080/api/account', {headers: heads});
  }

  readUser(login: string): Observable<UserDTO> {
    let heads = {'Authorization': 'Bearer ' + localStorage.getItem('id_token')};
    return this.http.get<UserDTO>('http://localhost:' + this.port + '/' + this.type + '/' + login, {headers: heads});
  }

  deleteUser(login: string): Observable<any> {
    let heads = {'Authorization': 'Bearer ' + localStorage.getItem('id_token')};
    return this.http.delete('http://localhost:' + this.port + '/' + this.type + '/' + login, {headers: heads});
  }

  insert(dto: UserDTO): Observable<any> {
    let heads = {'Authorization': 'Bearer ' + localStorage.getItem('id_token')};
    return this.http.post('http://localhost:' + this.port + '/api/register', dto, {headers: heads});
  }

}
