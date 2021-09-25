import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModeService } from './mode.service';
import { Company } from '../models/company.model';
import { Observable } from 'rxjs';
import { Coupon } from '../models/coupon.model';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CompanyService implements CanActivate {
/**
 * This canActivate function check is the user is type of company.
 * If not, it's navigate to logout or to login as other user.
 */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.modeService.role == 2) {
      return true
    } else if(this.modeService.isLogin){
      this.router.navigate(["logout"])
    }else {
      this.router.navigate(["login"])
      return false
    }

  }

  constructor(private httpClient: HttpClient, private modeService: ModeService, private router: Router) { }

  updateCompany(company: Company): Observable<Company> {
    return this.httpClient.put<Company>("http://localhost:8080/api/companies/updateCompany/" + this.modeService.token, company);
  }

  addCoupon(coupon: Coupon): Observable<Coupon> {
    return this.httpClient.post<Coupon>("http://localhost:8080/api/companies/addCoupon/" + this.modeService.token, coupon)
  }

  removeCoupon(couponId: number): Observable<any> {
    return this.httpClient.delete<any>("http://localhost:8080/api/companies/" + this.modeService.token + "/coupons/remove/" + couponId, { responseType: 'text' as 'json' })
  }

  updateCoupon(coupon: Coupon): Observable<any> {
    return this.httpClient.put<any>("http://localhost:8080/api/companies/coupons/update/" + this.modeService.token, coupon, { responseType: 'text' as 'json' })
  }


}
