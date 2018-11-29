import { Component, OnInit } from '@angular/core';
import { RestAdminService } from 'src/app/services/rest-admin.service';
import { Role } from 'src/app/model/role.model';

@Component({
  selector: 'app-role-card',
  templateUrl: './role-card.component.html',
  styleUrls: ['./role-card.component.css']
})
export class RoleCardComponent implements OnInit {
  roles: Role[] = [];

  constructor(private restAdmin: RestAdminService) { }
  add = true;
  role: Role;
  ngOnInit() {
    this.getRoles();
  }
  changeToAdd(val: boolean = true) {
    console.log('changed');
      this.add = val;
  }
  changeToEdit(role: Role) {
      this.add = false;
      this.role = role;
  }
  getRoles() {
    this.restAdmin.getRoles().subscribe(x => this.roles = x);
  }
  newRole() {
    this.restAdmin.getRoles().subscribe(x => this.roles = x);
  }
  deleteRole(roleId: string) {
    this.restAdmin.deleteRole(roleId).subscribe(x => {
      this.restAdmin.getRoles().subscribe(r => this.roles = r);
    });
  }
}
