import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RestAdminService } from 'src/app/services/rest-admin.service';
import { Role } from 'src/app/model/role.model';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit {
  @Input()role: Role;
  @Output()switchToAdd: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private restAdmin: RestAdminService) { }

  ngOnInit() {
  }
  switchToAddForm() {
    this.switchToAdd.emit(true);
  }
  saveRole() {
    this.restAdmin.updateRole(this.role).subscribe(x => console.log('updated successful'), e => console.log('e'));
  }

}
