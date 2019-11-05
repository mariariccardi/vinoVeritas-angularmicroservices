import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDTO } from 'src/dto/userdto';
import { Observable } from 'rxjs';
import { LoginDTO } from 'src/dto/logindto';
import { AbstractService } from './abstractservice';

@Injectable({
    providedIn: 'root'
})

export class UserService extends AbstractService<UserDTO>{
  constructor(http:HttpClient){
      super(http);
      this.type= 'user';
  }

  login(loginDTO:LoginDTO): Observable<UserDTO>{

      return this.http.post<any>('http://localhost:8080/'+ this.type + '/login', loginDTO)
  }

  getAccount(): Observable<UserDTO> {
    let heads = {'Authorization': 'Bearer ' + localStorage.getItem('id_token')};
    return this.http.get<any>('http://localhost:8080/api/account', {headers: heads});
  }
}

