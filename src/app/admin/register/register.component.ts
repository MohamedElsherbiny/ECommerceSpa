import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/model/registerModel.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerModel: RegisterModel = new RegisterModel();
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
  }
  Register() {
    console.log(this.registerModel);
    this.authService.register(this.registerModel).subscribe(x => {
      this.router.navigate(['/login']);
    });
  }

}
