import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserCredentials } from '../../models/user-credentials.model';
import { Observable } from 'rxjs';
import { ModeService } from 'src/app/services/mode.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate, CanLoad, Route, UrlSegment } from '@angular/router';
import { LoginComponent } from './login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.modeService.isLogin == true) {
      return true
    } else {
      this.router.navigate(["login"])
      return false
    }

  }

  constructor(private httpClient: HttpClient, private modeService: ModeService, private router: Router) { }

  public authentication(userCredentials: UserCredentials): Observable<any> {
    return this.httpClient.post<any>
      ("http://localhost:8080/api/users/login?email=" + userCredentials.email + "&password=" + userCredentials.password, null,
        { responseType: 'text' as 'json' });
  }

  public logout(): Observable<any> {
    return this.httpClient.delete<any>
      ("http://localhost:8080/api/" + this.modeService.type + "/logOff/" + this.modeService.token,
        { responseType: 'text' as 'json' });
  }




}
