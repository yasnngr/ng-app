import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMode(){
    this.isLoginMode=!this.isLoginMode
  }

}
