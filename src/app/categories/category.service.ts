import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map, take, tap, exhaustMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../authentication/auth.service';
import { Category } from './category.model';

@Injectable()
export class CategoryService {

  private url=environment.database_url;

  constructor(
    private http:HttpClient,
    private authService:AuthService
    ) { }
  
  getCategories():Observable<Category[]>{
    
    return this.http.get<Category[]>(this.url + "categories.json")
        .pipe(
            map(data=>{
              const categories:Category[]=[]
              
              for(const key in data){
                categories.push({...data[key],id:key})
              }
              
              return categories
            })
        );

  }
  
  createCategory(category:Category):Observable<Category>{
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user=>{
          return this.http.post<Category>(this.url + "categories.json?auth="+user?.token,category)
      })
  );
    
    
  }
}
