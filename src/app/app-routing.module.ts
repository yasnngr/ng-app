import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},//locale host yani ilk sayfa
  {path:'', redirectTo:'/home', pathMatch:'full'},//pathmatch full'ün anlamı herhangi bir yönnlerdime olmadığı zaman gidicek
  {path:'**', component:NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
