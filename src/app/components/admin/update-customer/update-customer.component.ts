import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { User } from 'src/app/models/user.model';
import { AdminService } from 'src/app/services/admin.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  user: User = new User();

  idFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,4})+$')]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]);
  firstnameFormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]);
  lasttnameFormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]);

  formGroup = new FormGroup(
    {
      id: this.idFormControl,
      firstName: this.firstnameFormControl,
      lastName: this.lasttnameFormControl,
      email: this.emailFormControl,
      password: this.passwordFormControl
    }
  );

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  updateCustomer() {
    this.customer.id = this.idFormControl.value;
    this.customer.firstName = this.firstnameFormControl.value;
    this.customer.lastName = this.lasttnameFormControl.value;
    this.user.email = this.emailFormControl.value;
    this.user.password = this.passwordFormControl.value;
    this.customer.user = this.user;
    this.adminService.updateCustomer(this.customer).subscribe(cus => {
      alert("Customer " + cus.user.email + " updated succesfully")
    }, error => {
      alert(error.error.message);
    })
  }

}
