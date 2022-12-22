import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Subject, tap, throwError } from 'rxjs';
import { AuthResponse } from '../models/auth-response';
import { User } from '../models/user';





@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_key="AIzaSyB1CRclhPatrWY0md177uqvlGscEpxKsGY"
  user=new BehaviorSubject<User|null>(null)
  
  constructor(private http:HttpClient) { }

  register(email:string,password:string){
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+this.api_key,{
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(
      tap(response=>{
        this.handleUser(response.email,response.localId,response.idToken,response.expiresIn)
      }),
      catchError(this.handleError)
      )
  }

  login(email:string,password:string){
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+this.api_key,{
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(
      tap(response=>{
        this.handleUser(response.email,response.localId,response.idToken,response.expiresIn)
      }),
      catchError(this.handleError)
      )
  }

  private handleError(err:HttpErrorResponse){
    let message="Hata Oluştu"

    if(err.error.error){
      switch(err.error.error.message){
        case "EMAIL_EXIST":
          message="Bu mail adresi zaten kullanılıyor."
          break;
        case "TOO_MANY_ATTEMPTS_TRY_LATER":
          message="Daha sonra tekrar deneyiniz."
          break;
        case "EMAIL_NOT_FOUND":
          message="Böyle bir mail adresi bulunamadı."
          break;
        case "INVALID_PASSWORD":
          message="Hatalı Parola"
          break;
      }
    }

    return throwError(()=>message)
  }

  private handleUser(email:string,localId:string,idToken:string,expiresIn:string){
    const expirationDate=new Date(new Date().getTime()+(+expiresIn * 1000))
        const user=new User(
          email,
          localId,
          idToken,
          expirationDate
        )
        console.log(user)
        this.user.next(user)
  }

}
