import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/model/User.model';
import { RestAdminService } from 'src/app/services/rest-admin.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @Input()user: User = new User();
  @Output()switchToAdd: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private restAdmin: RestAdminService) { }

  ngOnInit() {
    this.user = new User();
  }
  switchToAddForm() {
    this.switchToAdd.emit(true);
  }
  saveUser() {
    this.restAdmin.updateUser(this.user).subscribe(x => this.switchToAdd.emit(true));
  }
}
