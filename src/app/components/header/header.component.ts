import { Component, OnInit } from '@angular/core';
import { ModeService } from 'src/app/services/mode.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  appTitle = 'Coupon system';

  constructor(private modeService: ModeService) { }

  ngOnInit() {
  }

}
