import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Coupon } from 'src/app/models/coupon.model';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  couponId: number;
  tableInput: Coupon[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getAllAvailableCoupons().subscribe(arr => {
      if (arr == null) {
        alert("No coupons have found")
      }
      this.tableInput = arr;
    },
      (err => {
        alert(err.message);
      }));
  }

  purchaseCoupon() {
    this.customerService.purchaseCoupon(this.couponId).subscribe(coupon => {
      alert("Coupon with id " + coupon.id + " has been purchsed.");
    }, err => {
      alert(err.error.message)
    })
  }

}
