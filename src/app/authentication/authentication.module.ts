import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@NgModule({
    declarations:[
        AuthComponent,
        ForgetPasswordComponent

    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule,
        RouterModule.forChild([
            {path:'auth/login', component:AuthComponent},
            {path:'auth/register', component:AuthComponent},
            {path:'forgetPassword',component:ForgetPasswordComponent}
        ])
    ],
    exports:[
        AuthComponent
    ]
})
export class AuthenticationModule{

}