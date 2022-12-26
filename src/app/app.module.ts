import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { FormsModule } from '@angular/forms';
import {CKEditorModule} from 'ckeditor4-angular';
import { AuthComponent } from './auth/auth.component'
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryListComponent,
    HomeComponent,
    CategoryCreateComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
