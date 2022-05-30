import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ErrorComponent } from './products/error/error.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path:'products', component: ProductListComponent},
  {path:'product/:id', component: ProductDetailsComponent},
  {path:'products/add', component: AddProductComponent},
  {path:'users/login', component: UserFormComponent},
  {path:'users/profile/:id', component: UserProfileComponent},
  {path: 'photos', component: PhotosComponent},
  {path:'', redirectTo: 'products', pathMatch: 'full'},
  {path:'**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
