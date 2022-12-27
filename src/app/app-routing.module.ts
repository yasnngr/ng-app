import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './authentication/auth/auth.component';
import { CategoryCreateComponent } from './categories/category-create/category-create.component';
import { HomeComponent } from './home/home.component';


import { ProductComponent } from './products/product/product.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AdminGuard } from './authentication/admin.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},//locale host yani ilk sayfa
  {path:'products/create',component:ProductCreateComponent,canActivate:[AdminGuard]},
  {path:'categories/create',component:CategoryCreateComponent,canActivate:[AdminGuard]},
  {path:'products',component:ProductListComponent},
  {path:'products/:productId',component:ProductComponent},
  {path:'products/category/:categoryId', component:ProductListComponent},
  {path:'auth', component:AuthComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
