import { Component, OnInit } from '@angular/core';
import { RestAdminService } from 'src/app/services/rest-admin.service';
import { ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { Role } from 'src/app/model/role.model';
import { User } from 'src/app/model/User.model';

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.css']
})
export class RoleDetailComponent implements OnInit {
  users: User[];
  role: Role;
  constructor(private restAdmin: RestAdminService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const roleId = this.activatedRoute.snapshot.params.id;
    this.restAdmin.getUsersInRole(roleId).subscribe(x => {
      this.users = x;
    });
    this.restAdmin.getRole(roleId).subscribe(x => this.role = x);
  }

}
