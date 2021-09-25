import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModeService } from './mode.service';
import { Company } from '../models/company.model';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';
import { CustomerComponent } from '../models/customer/customer.component';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate {

  constructor(private httpClient: HttpClient, private modeService: ModeService, private router: Router) { }
/**
 * Admin service which check if the user is Admin, to enter and use this service.
 * @param route 
 * @param state 
 */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.modeService.role == -1) {
      return true
    } else if (this.modeService.isLogin) {
      this.router.navigate(["logout"])
    } else {
      this.router.navigate(["login"])
      return false
    }
  }

  createCompany(company: Company): Observable<Company> {
    return this.httpClient.post<Company>("http://localhost:8080/api/" + this.modeService.type + "/createCompany/" + this.modeService.token, company);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>("http://localhost:8080/api/" + this.modeService.type + "/createCustomer/" + this.modeService.token, customer)
  }

  updateCompany(company: Company): Observable<Company> {
    return this.httpClient.put<Company>("http://localhost:8080/api/" + this.modeService.type + "/updateCompany/" + this.modeService.token, company);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>("http://localhost:8080/api/" + this.modeService.type + "/updateCustomer/" + this.modeService.token, customer)
  }

  removeCompany(id: number): Observable<any> {
    return this.httpClient.delete<any>("http://localhost:8080/api/" + this.modeService.type + "/" + this.modeService.token + "/removeCompany/" + id, { responseType: 'text' as 'json' });
  }

  removeCustomer(id: number): Observable<any> {
    return this.httpClient.delete<any>("http://localhost:8080/api/" + this.modeService.type + "/" + this.modeService.token + "/removeCustomer/" + id, { responseType: 'text' as 'json' });
  }

  removeAllCompanies(): Observable<any> {
    return this.httpClient.delete<any>("http://localhost:8080/api/" + this.modeService.type + "/" + this.modeService.token + "/removeCompany/all", { responseType: 'text' as 'json' })
  }

  removeAllCustomers(): Observable<any> {
    return this.httpClient.delete<any>("http://localhost:8080/api/" + this.modeService.type + "/" + this.modeService.token + "/removeCustomer/all", { responseType: 'text' as 'json' })
  }

  getAllCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>("http://localhost:8080/api/" + this.modeService.type + "/" + this.modeService.token + "/getAllCompanies");
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>("http://localhost:8080/api/" + this.modeService.type + "/" + this.modeService.token + "/getAllCustomers");
  }



}
