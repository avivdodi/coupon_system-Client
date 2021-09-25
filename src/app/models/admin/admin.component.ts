import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  removeAllCompanies() {
    if (window.confirm("Are you sure to remove all companies?")) {
      this.adminService.removeAllCompanies().subscribe(resp => {
        alert(resp)
      }, error => {
        alert(error.error.message);
      })
    }
  }

  removeAllCustomers() {
    if (window.confirm("Are you sure to remove all customers?")) {
      this.adminService.removeAllCustomers().subscribe(resp => {
        alert(resp)
      }, error => {
        alert(error.error.message);
      })
    }
  }
}
