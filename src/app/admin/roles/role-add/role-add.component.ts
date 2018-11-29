import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RestAdminService } from 'src/app/services/rest-admin.service';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.css']
})
export class RoleAddComponent implements OnInit {
  role: string;
 @Output() AddedRole: EventEmitter<string> = new EventEmitter<string>();

  constructor(private restAdmin: RestAdminService) { }

  ngOnInit() {
  }
  addRole() {
    this.restAdmin.addRole(this.role).subscribe(x => {
      this.AddedRole.emit(this.role);
      this.role = ' ';
    });
  }

}
