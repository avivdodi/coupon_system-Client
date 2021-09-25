import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { User } from 'src/app/models/user.model';
import { AdminService } from 'src/app/services/admin.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  company: Company = new Company();
  user: User = new User();

  idFormControl = new FormControl('', [Validators.required]);
  nameFormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]);
  emailFormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,4})+$')]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]);

  formGroup = new FormGroup(
    {
      id: this.idFormControl,
      name: this.nameFormControl,
      email: this.emailFormControl,
      password: this.passwordFormControl
    }
  );

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  updateCompany() {
    this.company.id = this.idFormControl.value;
    this.company.name = this.nameFormControl.value;
    this.user.email = this.emailFormControl.value;
    this.user.password = this.passwordFormControl.value;
    this.company.user = this.user;
    this.adminService.updateCompany(this.company).subscribe(comp => {
      alert("Company " + comp.user.email + " updated succesfully")
    }, error => {
      alert(error.error.message);
    })
  }

}
