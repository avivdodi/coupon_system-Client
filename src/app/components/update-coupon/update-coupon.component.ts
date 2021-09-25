import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/services/company.service';
import { CouponsService } from 'src/app/services/coupons.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

  newCoupon: Coupon = new Coupon;
  tableInput: Coupon[];

  idFormControl = new FormControl('', [Validators.required]);
  titleFormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]);
  descrFormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(200)]);
  priceFormControl = new FormControl('', [Validators.required, Validators.min(0), Validators.max(10000)]);
  amountFormControl = new FormControl('', [Validators.required, Validators.min(1), Validators.max(10000)]);
  categoryFormControl = new FormControl('', [Validators.required, Validators.min(1)]);
  start_dateFormControl = new FormControl('', [Validators.required]);
  end_dateFormControl = new FormControl('', [Validators.required]);
  imageURLFormControl = new FormControl('', [Validators.required]);

  formGroup = new FormGroup(
    {
      id: this.idFormControl,
      title: this.titleFormControl,
      description: this.descrFormControl,
      price: this.priceFormControl,
      amount: this.amountFormControl,
      category: this.categoryFormControl,
      start_date: this.start_dateFormControl,
      end_date: this.end_dateFormControl,
      imageURL: this.imageURLFormControl
    }
  );

  constructor(private companyService: CompanyService, private coupons: CouponsService) { }

  ngOnInit() {
    this.coupons.getAllCouponsRest().subscribe(arr => {
      this.tableInput = arr;
    },
      (err => {
        alert(err.message);
      }));
  }

  updateCoupon() {
    this.newCoupon.id = this.idFormControl.value;
    this.newCoupon.title = this.titleFormControl.value;
    this.newCoupon.description = this.descrFormControl.value;
    this.newCoupon.price = this.priceFormControl.value;
    this.newCoupon.amount = this.amountFormControl.value;
    this.newCoupon.category = this.categoryFormControl.value;
    this.newCoupon.startDate = this.start_dateFormControl.value;
    this.newCoupon.endDate = this.end_dateFormControl.value;
    this.newCoupon.imageURL = this.imageURLFormControl.value;
    
    this.companyService.updateCoupon(this.newCoupon).subscribe(response => {
      alert(response);
      this.ngOnInit();
    }, error => {
      let response = JSON.parse(error.error);
      alert(response.message);
    });

  }

}
