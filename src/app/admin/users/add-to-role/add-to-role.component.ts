import { Component, OnInit } from '@angular/core';
import { RestAdminService } from 'src/app/services/rest-admin.service';
import { Role } from 'src/app/model/role.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from 'src/app/model/User.model';

@Component({
  selector: 'app-add-to-role',
  templateUrl: './add-to-role.component.html',
  styleUrls: ['./add-to-role.component.css']
})
export class AddToRoleComponent implements OnInit {
  roles: Role[] = [];
  user: User;
  userId: string;
  constructor(private restAdmin: RestAdminService, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params.id;
    this.restAdmin.getRoles().subscribe(x => this.roles = x);
    this.restAdmin.getUser(this.userId).subscribe(x => this.user = x);
  }
  addToRole(roleId) {
    this.restAdmin.addToRole(this.userId, roleId).subscribe(x => {
      this.restAdmin.getRoles().subscribe(y => this.roles = y);
      this.restAdmin.getUser(this.userId).subscribe(y => this.user = y);
    });
  }
  removeFromRole(roleId) {
    this.restAdmin.removeFromRole(this.userId, roleId).subscribe(x => {
      this.restAdmin.getRoles().subscribe(y => this.roles = y);
      this.restAdmin.getUser(this.userId).subscribe(y => this.user = y);
    });
  }
  InRole(val: string, arr: Array<string>) {
    try {
      return arr.includes(val);
    } catch {

    }
  }
}
