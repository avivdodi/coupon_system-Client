import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-remove-company',
  templateUrl: './remove-company.component.html',
  styleUrls: ['./remove-company.component.css']
})
export class RemoveCompanyComponent implements OnInit {

  id: number;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  removeCompany() {
    this.adminService.removeCompany(this.id).subscribe(comp => {
      alert(comp);
      window.location.reload();
    }, error => {
      let response = JSON.parse(error.error);
      alert(response.error);
    });
  }

}
