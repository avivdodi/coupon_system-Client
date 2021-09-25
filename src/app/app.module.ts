import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminComponent } from './models/admin/admin.component';
import { CustomerComponent } from './models/customer/customer.component';
import { CompanyComponent } from './models/company/company.component';
import { HttpClientModule } from '@angular/common/http';
import { CouponsComponent } from './components/coupons/coupons.component';
import { UpdateComponent } from './components/update/update.component';
import { AddCouponComponent } from './components/add-coupon/add-coupon.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { RemoveCouponComponent } from './components/remove-coupon/remove-coupon.component';
import { UpdateCouponComponent } from './components/update-coupon/update-coupon.component';
import { CreateCompanyComponent } from './components/admin/create-company/create-company.component';
import { CreateCustomerComponent } from './components/admin/create-customer/create-customer.component';
import { RemoveCompanyComponent } from './components/admin/remove-company/remove-company.component';
import { RemoveCustomerComponent } from './components/admin/remove-customer/remove-customer.component';
import { UpdateCustomerComponent } from './components/admin/update-customer/update-customer.component';
import { UpdateCompanyComponent } from './components/admin/update-company/update-company.component';
import { CompaniesComponent } from './components/admin/companies/companies.component';
import { CustomersComponent } from './components/admin/customers/customers.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    AboutComponent,
    LoginComponent,
    Page404Component,
    HomeComponent,
    LogoutComponent,
    AdminComponent,
    CustomerComponent,
    CompanyComponent,
    CouponsComponent,
    UpdateComponent,
    AddCouponComponent,
    PurchaseComponent,
    RemoveCouponComponent,
    UpdateCouponComponent,
    CreateCompanyComponent,
    CreateCustomerComponent,
    RemoveCompanyComponent,
    RemoveCustomerComponent,
    UpdateCustomerComponent,
    UpdateCompanyComponent,
    CompaniesComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
