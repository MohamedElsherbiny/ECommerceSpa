import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/model/User.model';
import { RestAdminService } from 'src/app/services/rest-admin.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  user: User;
 @Output() SavedUser: EventEmitter<User> = new EventEmitter<User>();
  constructor(private restAdmin: RestAdminService) { }

  ngOnInit() {
    this.user = new User();
  }
  addUser() {
    this.restAdmin.addUser(this.user).subscribe(x => {
      this.SavedUser.emit(this.user);
      this.user = new User();
    });
  }
}
