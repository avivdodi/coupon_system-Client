import { Component, OnInit } from '@angular/core';
import { UserCredentials } from '../../models/user-credentials.model';
import { ModeService } from '../../services/mode.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  // At this moment I'm allowed to enter any credentials, to avoid a limitation of credentials that have been written directly to DB.  
  emailFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);

  loginForm = new FormGroup(
    {
      email: this.emailFormControl,
      password: this.passwordFormControl
    }
  );

  constructor(private authService: AuthService, private modeService: ModeService, private router: Router) { }

  login(): void {
    this.email = this.emailFormControl.value;
    this.password = this.passwordFormControl.value;
    let userCredentials = new UserCredentials(this.email, this.password);
    this.authService.authentication(userCredentials).subscribe(myToken => {

      this.modeService.isLogin = true;
      localStorage.setItem("isLogin", "true");

      this.modeService.token = myToken;
      localStorage.setItem("token", myToken);
      this.modeService.email = this.email;
      localStorage.setItem("email", this.email);

      if (this.modeService.token.charAt(0) == '-') {
        this.modeService.role = -1;
        localStorage.setItem("role", "-1");

        this.modeService.type = "admin";
        localStorage.setItem("type", "admin");

      } else if (this.modeService.token.charAt(0) == '1') {
        this.modeService.role = 1;
        localStorage.setItem("role", "1");
        this.modeService.type = "customers";
        localStorage.setItem("type", "customers");

      } else {
        this.modeService.role = 2;
        localStorage.setItem("role", "2");

        this.modeService.type = "companies";
        localStorage.setItem("type", "companies");
      }

      this.router.navigate(["/home"]);

    }, err => {
      if (err.statusText != "Unknown Error") {
        let response = JSON.parse(err.error);
        alert(response.message);
      } else {
        alert(err.statusText + ". Please try again later.")
        this.router.navigate(["/404"]);
      }
    })

  }



  ngOnInit() {
  }

}
