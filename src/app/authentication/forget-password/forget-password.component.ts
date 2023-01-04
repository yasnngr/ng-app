import { HttpClient } from '@angular/common/http';
import { NotExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  error:string="";
  constructor(
    private http:HttpClient,
    private route:Router
    ) { }

  ngOnInit(): void {
  }

  restPassword(form:NgForm){
    this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key="+environment.api_key,{
      requestType:"PASSWORD_RESET",
      email:form.value.email
    }).subscribe({
      next:(()=>{
        console.log("deneme");
        this.error=""
        this.route.navigate(["/auth/login"])
      }),
      error:((err)=>{
        this.error="Lütfen geçerli bir mail adresi giriniz"
        if(err.error.error){
          if(err.error.error.message=="EMAIL_NOT_FOUND"){
            this.error="Böyle bir Email adresi bulunamadı"
          }
        }
      })
    })

    
  }

}
