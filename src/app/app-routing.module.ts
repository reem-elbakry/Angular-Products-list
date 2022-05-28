import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './products/error/error.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  {path:'products', component: ProductListComponent},
  {path:'product/:id', component: ProductDetailsComponent},
  {path:'', redirectTo: 'products', pathMatch: 'full'},
  {path:'**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
