import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/dto/userdto';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserDTO [];
  usersOld: UserDTO [];
  userToInsert: UserDTO;
  userToSearch: UserDTO = new UserDTO();

  constructor(private service: UserService) {
    this.userToInsert = new UserDTO ();
  }

  ngOnInit() {
    this.getUsers();
  }
    
  getUsers() {
    this.service.getAll().subscribe(users => this.users = this.usersOld = users);
  }

  update(user: UserDTO) {
    this.service.update(user).subscribe(()=> this.getUsers());
  }

  delete(user: UserDTO) {
    this.service.delete(user.id).subscribe(() => this.getUsers());
  }

  insert() {
    this.service.insert(this.userToInsert).subscribe(() => this.getUsers());
    this.clear();
  }

  clear(){
    this.userToInsert = new UserDTO ();
  }

  showPassword(e) {
      e.target.value = '';
      e.target.type = 'text';
  }

  search() {
      this.users = [];
      this.usersOld.forEach (u => {
        if ((!this.userToSearch.username || u.username.toLowerCase().includes(this.userToSearch.username.toLowerCase()))
            && (!this.userToSearch.userType || u.userType == this.userToSearch.userType)) {
          this.users.push(u);
        }
      });
    }

clearSearch(){
  this.userToSearch = new UserDTO ();
  this.users = this.usersOld;
}
}