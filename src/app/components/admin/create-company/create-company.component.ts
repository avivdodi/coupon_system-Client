import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Company } from 'src/app/models/company.model';
import { AdminService } from 'src/app/services/admin.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  company: Company = new Company();
  user: User = new User();

  nameFormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]);
  emailFormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,4})+$')]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]);

  formGroup = new FormGroup(
    {
      name: this.nameFormControl,
      email: this.emailFormControl,
      password: this.passwordFormControl
    }
  );

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  createCompany() {
    this.company.name = this.nameFormControl.value;
    this.user.email = this.emailFormControl.value;
    this.user.password = this.passwordFormControl.value;
    this.company.user = this.user;
    this.adminService.createCompany(this.company).subscribe(comp => {
      alert("Company '" + comp.user.email + "' created succesfully")
    }, error => {
      alert(error.error.message);
    });
  }

}
