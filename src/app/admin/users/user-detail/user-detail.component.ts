import { Component, OnInit } from '@angular/core';
import { RestAdminService } from 'src/app/services/rest-admin.service';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/model/role.model';
import { User } from 'src/app/model/User.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  roles: Role[];
  user: User;
  userId: string;
  constructor(private activatedRoute: ActivatedRoute, private restAdmin: RestAdminService) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params.id;
    this.restAdmin.getUser(this.userId).subscribe(x => this.user = x);
  }

}
