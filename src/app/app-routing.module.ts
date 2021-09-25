import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminComponent } from './models/admin/admin.component';
import { CustomerComponent } from './models/customer/customer.component';
import { CompanyComponent } from './models/company/company.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { UpdateComponent } from './components/update/update.component';
import { AddCouponComponent } from './components/add-coupon/add-coupon.component';
import { ModeService } from './services/mode.service';
import { CustomerService } from './services/customer.service';
import { CompanyService } from './services/company.service';
import { AdminService } from './services/admin.service';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { RemoveCouponComponent } from './components/remove-coupon/remove-coupon.component';
import { UpdateCouponComponent } from './components/update-coupon/update-coupon.component';
import { AuthService } from './components/login/auth.service';
import { CreateCompanyComponent } from './components/admin/create-company/create-company.component';
import { RemoveCompanyComponent } from './components/admin/remove-company/remove-company.component';
import { UpdateCompanyComponent } from './components/admin/update-company/update-company.component';
import { CreateCustomerComponent } from './components/admin/create-customer/create-customer.component';
import { RemoveCustomerComponent } from './components/admin/remove-customer/remove-customer.component';
import { UpdateCustomerComponent } from './components/admin/update-customer/update-customer.component';


const routes: Routes = [{ path: 'about', component: AboutComponent },
{ path: 'login', component: LoginComponent },
{ path: 'logout', canActivate: [AuthService], component: LogoutComponent },
{ path: 'admin', canActivate: [AdminService], component: AdminComponent },
{ path: 'admin/createCompany', canActivate: [AdminService], component: CreateCompanyComponent },
{ path: 'admin/removeCompany', canActivate: [AdminService], component: RemoveCompanyComponent },
{ path: 'admin/updateCompany', canActivate: [AdminService], component: UpdateCompanyComponent },
{ path: 'admin/createCustomer', canActivate: [AdminService], component: CreateCustomerComponent },
{ path: 'admin/removeCustomer', canActivate: [AdminService], component: RemoveCustomerComponent },
{ path: 'admin/updateCustomer', canActivate: [AdminService], component: UpdateCustomerComponent },
{ path: 'admin/all-coupons/:funcType', canActivate: [AdminService], component: CouponsComponent },



{ path: 'customer', canActivate: [CustomerService], component: CustomerComponent },
{ path: 'company', canActivate: [CompanyService], component: CompanyComponent },
{ path: 'all-coupons/:funcType', canActivate: [AuthService], component: CouponsComponent },
{ path: 'update', canActivate: [AuthService], component: UpdateComponent },
{ path: 'purchaseCoupon', canActivate: [CustomerService], component: PurchaseComponent },
{ path: 'add-coupon', canActivate: [CompanyService], component: AddCouponComponent },
{ path: 'remove-coupon', canActivate: [CompanyService], component: RemoveCouponComponent },
{ path: 'update-coupon', canActivate: [CompanyService], component: UpdateCouponComponent },
{ path: "home", component: HomeComponent },
{ path: "", redirectTo: "/home", pathMatch: "full" },
{ path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
