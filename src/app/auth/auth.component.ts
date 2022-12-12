import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  handleAuth(form:NgForm){
    
    if(!form.valid){//Böylede olur [disable] özelliği ile aynı
      return;
    }
    console.log(form)
  }

}
