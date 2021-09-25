import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAllCustomers().subscribe(response => {
      if (response == null) {
        alert("null");
      }
      this.customers = response;
    },
      (err => {
        alert(err.error.message);
      }));
  }

}
