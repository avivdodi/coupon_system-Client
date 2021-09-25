import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies: Company[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAllCompanies().subscribe(response => {
      if (response == null) {
        alert("null")
      }
      this.companies = response;
    },
      (err => {
        alert(err.error.message);
      }));
  }

}
