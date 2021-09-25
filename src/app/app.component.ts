import { Component } from '@angular/core';
import { ModeService } from './services/mode.service';
import { AuthService } from './components/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coupon-system';

  constructor(private modeService: ModeService) { }

  ngOnInit() {
    if (localStorage.getItem("isLogin") == "true") {
      this.modeService.email = localStorage.getItem("email")
      this.modeService.isLogin = true
      this.modeService.role = parseInt(localStorage.getItem("role"))
      this.modeService.token = localStorage.getItem("token")
      this.modeService.type = localStorage.getItem("type")
    }

  }
}
