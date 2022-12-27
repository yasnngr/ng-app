import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ProductCreateComponent } from "./product-create/product-create.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product/product.component";
import { CKEditorModule } from "ckeditor4-angular";

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
        CKEditorModule
    ],
    exports:[
        ProductListComponent,
        ProductComponent,
        ProductCreateComponent
    ]
})
export class ProductsModule{

}