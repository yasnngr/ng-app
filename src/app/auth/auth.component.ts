import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode:boolean=true;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  toggleMode(){
    this.isLoginMode=!this.isLoginMode
  }

  handleAuth(form:NgForm){
    
    if(!form.valid){//Böylede olur [disable] özelliği ile aynı
      return;
    }
    
    const email=form.value.email
    const password=form.value.password

    if(this.isLoginMode){
      console.log('login mode...')
    }else{
      this.authService.register(email,password).subscribe(response=>{
        console.log(response)
      })
    }

  }

}
