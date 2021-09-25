import { Component, OnInit } from '@angular/core';
import { ModeService } from 'src/app/services/mode.service';
import { Company } from 'src/app/models/company.model';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';
import { CompanyService } from 'src/app/services/company.service';
import { User } from 'src/app/models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  company: Company = new Company();
  customer: Customer = new Customer();
  user: User = new User();


  nameFormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]);
  emailFormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,4})+$')]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]);
  firstnameFormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]);
  lasttnameFormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]);

  myFormGroupCompany = new FormGroup(
    {
      name: this.nameFormControl,
      email: this.emailFormControl,
      password: this.passwordFormControl
    }
  );

  myFormGroupCustomer = new FormGroup(
    {
      firstName: this.firstnameFormControl,
      lastName: this.lasttnameFormControl,
      email: this.emailFormControl,
      password: this.passwordFormControl
    }
  );
  constructor(private modeService: ModeService, private customerService: CustomerService, private companyService: CompanyService) { }

  ngOnInit() {
  }

  updateCustomer() {
    this.customer.firstName = this.firstnameFormControl.value;
    this.customer.lastName = this.lasttnameFormControl.value;
    this.user.email = this.emailFormControl.value;
    this.user.password = this.passwordFormControl.value;
    this.customer.user = this.user;

    this.customerService.updateCustomer(this.customer).subscribe(cus => {
      alert("customer " + cus.user.email + " update succesfully")
    }, error => {
      alert(error.error.message);
    });
  }

  updateCompany() {
    this.company.name = this.nameFormControl.value;
    this.user.email = this.emailFormControl.value;
    this.user.password = this.passwordFormControl.value;
    this.company.user = this.user;
    this.companyService.updateCompany(this.company).subscribe(comp => {
      alert("company " + comp.user.email + " update succesfully")
    }, error => {
      alert(error.error.message);
    });
  }

}
