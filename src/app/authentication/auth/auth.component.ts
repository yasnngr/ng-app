import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from '../auth-response.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode:boolean=true;
  loading=false;
  error:string="";

  constructor(
    private authService:AuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
    if(this.router.url=="/auth/login"){
      this.isLoginMode=true
    }else if(this.router.url=="/auth/register"){
      this.isLoginMode=false
    }
  }

  toggleMode(){
     this.isLoginMode=!this.isLoginMode
     if(this.isLoginMode){
       this.router.navigate(['/auth/login'])
     }else{
       this.router.navigate(['/auth/register'])
     }
  }

  handleAuth(form:NgForm){
    
    if(!form.valid){//Böylede olur [disable] özelliği ile aynı
      return;
    }

    this.loading=true
    
    const email=form.value.email
    const password=form.value.password
    let authResponse:Observable<AuthResponse>

    if(this.isLoginMode){
      authResponse=this.authService.login(email,password)
    }else{
      authResponse=this.authService.register(email,password)
    }

    authResponse.subscribe({//arraw functionu kaldırmamız lazım=>direkt obje göndericez
      
      next:(()=>{//doğru bilgi girdiğinde
        this.loading=false
        this.error="";
        this.router.navigate(['/'])
      }),
      error:(err=>{//yanlış bilgi girdiğinde
        this.loading=false;
        this.error=err
      })
      
    })
  }

}
