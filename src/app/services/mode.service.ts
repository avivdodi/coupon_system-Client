import { Injectable } from '@angular/core';
 /**
  * This mode service handle the status of connected user.
  */
@Injectable({
  providedIn: 'root'
})

export class ModeService {

  role: number;
  type: string;
  isLogin: boolean;
  token: string;
  email: string;

  constructor() { }
}