import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  // selector: 'app',  Böylede ekleyebiliriz
  // selector:'.app', //! class selector'u kullanmış oluyoruz
  selector:'#app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],// bir kaç tane daha css dosyası virgüllerle ekleyebilirsin
  providers: [ProductService]
})
export class AppComponent {
  private title = 'Home Page';

  constructor(
    private http:HttpClient,
    private productService:ProductService
    ){

  }

  getTitle(){
    return this.title
  }

}
