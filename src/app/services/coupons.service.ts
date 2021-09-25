import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Coupon } from '../models/coupon.model';
import { Observable } from 'rxjs';
import { ModeService } from './mode.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

/**
 * This coupon service contains all the function to manipulate coupons.
 */
@Injectable({
  providedIn: 'root'
})
export class CouponsService implements CanActivate {
/**
 * This canActivate checks first if the user is login.
 * @param route 
 * @param state 
 */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.modeService.isLogin == true) {
      return true
    } else {
      this.router.navigate(["login"])
      return false
    }

  }

  constructor(private httpClient: HttpClient, private modeService: ModeService, private router: Router) { }


  getAllCouponsRest(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("http://localhost:8080/api/" + this.modeService.type + "/coupons/" + this.modeService.token);
  }

  getAllCouponsByCategory(category: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("http://localhost:8080/api/" + this.modeService.type + "/coupons/" + this.modeService.token + "/category/" + category);
  }

  getAllCouponsByPrice(price: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("http://localhost:8080/api/" + this.modeService.type + "/coupons/" + this.modeService.token + "/price/" + price);
  }

  getAllCouponsByDate(date: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("http://localhost:8080/api/" + this.modeService.type + "/" + this.modeService.token + "/coupons/beforeEndDate?date=" + date);
  }

  getAllEmptyCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("http://localhost:8080/api/" + this.modeService.type + "/" + this.modeService.token + "/coupons/empty");
  }

  getAllCompanyCouponsByDate(date: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("http://localhost:8080/api/" + this.modeService.type + "/coupons/" + this.modeService.token + "/date/" + date);
  }

  getCouponsBeforeEndDate(date: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("http://localhost:8080/api/" + this.modeService.type + "/" + this.modeService.token + "/coupons/beforeEndDate?date=" + date);
  }

  getEmptyCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("http://localhost:8080/api/" + this.modeService.type + "/" + this.modeService.token + "/coupons/empty");
  }
}
