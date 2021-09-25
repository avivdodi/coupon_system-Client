import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CouponsService } from 'src/app/services/coupons.service';
import { Coupon } from 'src/app/models/coupon.model';

@Component({
  selector: 'app-remove-coupon',
  templateUrl: './remove-coupon.component.html',
  styleUrls: ['./remove-coupon.component.css']
})
export class RemoveCouponComponent implements OnInit {

  couponId: number;
  funcType: string = '1';
  tableInput: Coupon[];


  constructor(private companyService: CompanyService, private coupons: CouponsService) { }

  ngOnInit() {
    this.coupons.getAllCouponsRest().subscribe(arr => {
      this.tableInput = arr;
    },
      (err => {
        alert(err.message);
      }));
  }

  delete(id: number) {
    this.companyService.removeCoupon(id).subscribe(response => {
      alert(response);
      this.ngOnInit();      
    }, err => {
      alert(err.error.message)
    })

  }

}
