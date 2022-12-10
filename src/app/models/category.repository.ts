import { Category } from "./category";

export class CategoryRepository{
    private categories:Category[]=[
        {id:1,name:"Telefon"},
        {id:2,name:"Bilgisayar"},
        {id:3,name:"Televizyon"},
        {id:4,name:"Beyaz Eşya"},
    ];

    getCategories():Category[]{
        return this.categories;
    }

    getCategoryById(id:number){
        return this.categories.find(p=>p.id==id)
    }
}