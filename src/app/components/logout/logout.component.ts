import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AuthService } from '../login/auth.service';
import { ModeService } from 'src/app/services/mode.service';
import { Observable } from 'rxjs';

/**
 * This logout component let the user to securely logout, and if there is connection trouble, it's disconnect locally.
 */
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  email: string;

  constructor(private authService: AuthService, private modeService: ModeService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.email = this.modeService.email;
  }

  logout(): void {
    this.authService.logout().subscribe(msg => {

      this.modeService.isLogin = false;
      localStorage.setItem("isLogin", "false");

      this.modeService.token = null;
      localStorage.setItem("token", null);

      this.modeService.role = 0;
      localStorage.setItem("role", null);

      this.modeService.email = undefined;
      localStorage.setItem("email", null);

      this.modeService.type = undefined;
      localStorage.setItem("type", null);
      // Refresh the side menu.
      this.ngOnInit();

    }, err => {
      this.modeService.isLogin = false;
      localStorage.setItem("isLogin", "false");

      this.modeService.token = null;
      localStorage.setItem("token", null);

      this.modeService.role = 0;
      localStorage.setItem("role", null);

      this.modeService.email = undefined;
      localStorage.setItem("email", null);

      this.modeService.type = undefined;
      localStorage.setItem("type", null);
      // Refresh the side menu.
      this.ngOnInit();
    })
  }
}
