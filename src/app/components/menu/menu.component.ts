import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { ModeService } from 'src/app/services/mode.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private authService: AuthService, private modeService: ModeService) { }

  ngOnInit() {
  }

}
