import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';
import { ModeService } from './mode.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Coupon } from '../models/coupon.model';

/**
 * This service contains special functionalities for customers.
 */
@Injectable({
  providedIn: 'root'
})
export class CustomerService implements CanActivate {
/**
 * This canActivate function check if the user has the rights of customer. 
 * If not, it's navigate to logout or to login to the system.
 * @param route 
 * @param state 
 */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.modeService.role == 1) {
      return true
    }else if(this.modeService.isLogin){
      this.router.navigate(["logout"])
    } else {
      this.router.navigate(["login"])
      return false
    }
  }


  constructor(private httpClient: HttpClient, private modeService: ModeService, private router: Router) { }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>("http://localhost:8080/api/customers/updateCustomer/" + this.modeService.token, customer);
  }

  purchaseCoupon(couponId: number): Observable<Coupon> {
    return this.httpClient.patch<Coupon>("http://localhost:8080/api/customers/" + this.modeService.token + "/purchaseCoupon/" + couponId, null);
  }

  getAllAvailableCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("http://localhost:8080/api/customers/" + this.modeService.token + "/allAvailableCoupons")
  }

}




