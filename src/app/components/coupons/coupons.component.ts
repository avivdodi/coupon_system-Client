import { Component, OnInit, Input } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { CouponsService } from 'src/app/services/coupons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {
  tableInput: Coupon[];
  @Input()
  funcType: string;

  constructor(private coupons: CouponsService, private activateRoute: ActivatedRoute) {
  }
/**
 * This component check at the start to which param the user needs a service. 
 * It's handles variety of capabillities to all the system.
 */
  ngOnInit() {
    if (this.funcType == undefined) {
      this.funcType = this.activateRoute.snapshot.params.funcType;
    }

    switch (this.funcType) {

      case '1':
        this.coupons.getAllCouponsRest().subscribe(arr => {
          if (arr == null) {
            alert("The list is empty")
          }
          this.tableInput = arr;
        },
          (err => {
            alert(err.statusText + ". Please try again later.");
          }));
        break;

      case '2':
        var category = parseInt(prompt("Please enter category:", "Number"));

        this.coupons.getAllCouponsByCategory(category).subscribe(arr => {
          if (arr == null) {
            alert("The list is empty")
          }
          this.tableInput = arr;
        },
          (err => {
            alert(err.error.error);
          }));
        break;

      case '3':

        var price = parseInt(prompt("Please enter price:", "Price"));
        this.coupons.getAllCouponsByPrice(price).subscribe(arr => {
          if (arr == null) {
            alert("The list is empty")
          }
          this.tableInput = arr;
        },
          (err => {
            alert(err.error.error);
          }));
        break;

      case '4':
        var date = prompt("Please enter date:", "yyyy-MM-dd");
        this.coupons.getAllCouponsByDate(date).subscribe(arr => {
          if (arr == null) {
            alert("The list is empty")
          }
          this.tableInput = arr;
        },
          (err => {
            alert(err.error.message);
          }));
        break;

      case '5':

        this.coupons.getAllEmptyCoupons().subscribe(arr => {
          if (arr == null) {
            alert("No coupons with zero amount.")
          }
          this.tableInput = arr;
        },
          (err => {
            alert(err.message);
          }));
        break;



      case '6':
        var date = prompt("Please enter date:", "yyyy-MM-dd");
        this.coupons.getAllCompanyCouponsByDate(date).subscribe(arr => {
          if (arr == null) {
            alert("The list is empty")
          }
          this.tableInput = arr;
        },
          (err => {
            alert(err.error.message);
          }));
        break;

      case '7':

        break;

      case '8':
        var date = prompt("Please enter date:", "yyyy-MM-dd");
        this.coupons.getCouponsBeforeEndDate(date).subscribe(arr => {
          if (arr == null) {
            alert("The list is empty")
          }
          this.tableInput = arr;
        },
          (err => {
            alert(err.error.message);
          }));
        break;

      case '9':
        this.coupons.getEmptyCoupons().subscribe(arr => {
          if (arr == null) {
            alert("The list is empty")
          }
          this.tableInput = arr;
        },
          (err => {
            alert(err.statusText + ". Please try again later.");
          }));
        break;

      default:
        break;
    }

 

  }




}
