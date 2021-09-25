import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-remove-customer',
  templateUrl: './remove-customer.component.html',
  styleUrls: ['./remove-customer.component.css']
})
export class RemoveCustomerComponent implements OnInit {

  id: number;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  removeCustomer() {
    this.adminService.removeCustomer(this.id).subscribe(cus => {
      alert(cus)
    }, error => {
      let response = JSON.parse(error.error);
      alert(response.error);
    })
  }

}
