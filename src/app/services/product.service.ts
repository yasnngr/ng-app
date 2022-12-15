import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, map, Observable } from "rxjs";
import { Product } from "../models/product";

//locale service
@Injectable()
export class ProductService {
    private url="https://ng-shopapp-7aba9-default-rtdb.europe-west1.firebasedatabase.app/";

    constructor(private http:HttpClient){ }

    getProducts(categoryId:number):Observable<Product[]>{
        return this.http
            .get<Product[]>(this.url+"products.json")
            .pipe(
                map(data=>{
                    
                    const products:Product[]=[];
                    for(const key in data){
                        if(categoryId){
                            if(categoryId==data[key].categoryId){
                                products.push({...data[key],id:key})
                            }
                        }else{
                            products.push({...data[key],id:key})
                        }
                      }

                    return products
                }),
                // delay(1000)
            )
    }

    getProductById(id:string):Observable<Product>{
        return this.http.get<Product>(this.url+"products/"+id+".json")
            .pipe(
                // delay(1000)
            )
    }

    createProduct(product:Product):Observable<Product>{
        const token:string="eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OGI1NmM2NmVhYmIwZDlhNmJhOGNhMzMwMTU2NGEyMzhlYWZjODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbmctc2hvcGFwcC03YWJhOSIsImF1ZCI6Im5nLXNob3BhcHAtN2FiYTkiLCJhdXRoX3RpbWUiOjE2NzExMjkxOTQsInVzZXJfaWQiOiIwckFEcUtibFZoVWp5RHJQMnJUanpCQkxxcE4yIiwic3ViIjoiMHJBRHFLYmxWaFVqeURyUDJyVGp6QkJMcXBOMiIsImlhdCI6MTY3MTEyOTE5NCwiZXhwIjoxNjcxMTMyNzk0LCJlbWFpbCI6ImRlcmxlcnJyeWFzaW5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRlcmxlcnJyeWFzaW5AZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.A3uhlERLQmmbN2UsZhqKZFemX9C-YoWoOXwIz-bMXaBrbm6Q-rz7UCXaRIsLb0w6uQS73iiDaNUr73feZqlbGeNUbNSI01cWinocd6hiO4vQA9uWM_1aE0kqeTierw00NZWCgPyCyoQKlI7JELGbdPaWNn431cy6LWt3y5NSz6Ef4yoyaramGTz_Sx5Z4Wx15yThGdX4ppHockexiqr8mcPtUf9EpWsURO2Nq50mfy52vYleHWTpFz6GA-VVWFZNQwg2UcpVMfCmkDY9fXTCe86aKrkBghcMO2o08RZs0vyf3_BNjzwTcR-yceI7aXI0CBvlMT87gBgXgXEZruJiUg"
        return this.http.post<Product>(this.url+"products.json?auth="+token,product)
    }
}