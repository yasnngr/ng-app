import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ProductCreateComponent } from "./product-create/product-create.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product/product.component";
import { CKEditorModule } from "ckeditor4-angular";
import { AdminGuard } from "../authentication/admin.guard";
import { AuthenticationModule } from "../authentication/authentication.module";

const routes:Routes=[
    { 
    path:"",
    children:[
        {path:'create',component:ProductCreateComponent,canActivate:[AdminGuard]},
        {path:'',component:ProductListComponent},
        {path:':productId',component:ProductComponent},
        {path:'category/:categoryId', component:ProductListComponent},
    ]

    }
]

@NgModule({
    declarations:[
        ProductListComponent,
        ProductComponent,
        ProductCreateComponent,
    ],
    imports:[
        CommonModule,
        RouterModule,
        FormsModule,
        CKEditorModule,
        AuthenticationModule,
        RouterModule.forChild(routes)
    ],
    exports:[
        ProductListComponent,
        ProductComponent,
        ProductCreateComponent
    ]
})
export class ProductsModule{

}