import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { User } from 'src/app/models/user.model';
import { AdminService } from 'src/app/services/admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  user: User = new User();

  emailFormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,4})+$')]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]);
  firstnameFormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]);
  lasttnameFormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]);

  formGroup = new FormGroup(
    {
      firstName: this.firstnameFormControl,
      lastName: this.lasttnameFormControl,
      email: this.emailFormControl,
      password: this.passwordFormControl
    }
  );

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  createCustomer() {
    this.customer.firstName = this.firstnameFormControl.value;
    this.customer.lastName = this.lasttnameFormControl.value;
    this.user.email = this.emailFormControl.value;
    this.user.password = this.passwordFormControl.value;
    this.customer.user = this.user;
    this.adminService.createCustomer(this.customer).subscribe(cus => {
      alert("Customer '" + cus.user.email + "' created succesfully")
    }, error => {
      alert(error.error.message);
    })
  }

}
