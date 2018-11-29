import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User.model';
import { RestAdminService } from 'src/app/services/rest-admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private restAdmin: RestAdminService) { }
  users: User[];
  add = true;
  userToEdit: User;

  ngOnInit() {
    this.restAdmin.getUsers().subscribe(x => {
      this.users = x;
    });
  }
  changeToAdd(val: boolean = true) {
    console.log('changed');
    this.add = val;
  }
  changeToEdit(user: User) {
    this.userToEdit = user;
    this.add = false;
  }
  newUser(user: User) {
    this.restAdmin.getUsers().subscribe(x => this.users = x || []);
  }
  onDeleteUser(id: string) {
    this.restAdmin.deleteUser(id).subscribe(x => {
      const userIn = this.users.find(user => user.id === id);
      const userIndex = this.users.indexOf(userIn);
      this.users.splice(userIndex, 1);
    });
  }
}
