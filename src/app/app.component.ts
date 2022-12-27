import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './authentication/auth.service';
import { ProductService } from './products/product.service';

@Component({
  // selector: 'app',  Böylede ekleyebiliriz
  // selector:'.app', //! class selector'u kullanmış oluyoruz
  selector:'#app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],// bir kaç tane daha css dosyası virgüllerle ekleyebilirsin
  providers: [ProductService]
})
export class AppComponent implements OnInit {

  constructor(private authService:AuthService){

  }

  ngOnInit(): void {
    this.authService.autoLogin()
  }


}
