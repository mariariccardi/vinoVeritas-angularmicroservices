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

  constructor(private service: UserService) {}

  ngOnInit() {
    this.getUsers();
  }
    
  getUsers() {
    this.service.getAll().subscribe(users => this.users = this.usersOld = users);
  }

  update(user: UserDTO) {
    let e = document.getElementById('usertype_' + user.login) as HTMLSelectElement;
    user.authorities = [e.options[e.selectedIndex].value];
    this.service.update(user).subscribe(()=> this.getUsers());
  }

  delete(user: UserDTO) {
    this.service.delete(user.id).subscribe(() => this.getUsers());
  }

  insert(user:UserDTO) {
    this.service.insert(user).subscribe(() => this.getUsers());
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
        if ((!this.userToSearch.firstName || u.firstName.toLowerCase().includes(this.userToSearch.firstName.toLowerCase()))
            && (!this.userToSearch.lastName || u.lastName == this.userToSearch.lastName)
            && (!this.userToSearch.userType || u.userType == this.userToSearch.userType)
            && (this.userToSearch.activated === undefined || u.activated == this.userToSearch.activated)) {
          this.users.push(u);
        }
      });
    }

clearSearch(){
  this.userToSearch = new UserDTO ();
  this.users = this.usersOld;
}
}