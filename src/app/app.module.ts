import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { FavoriteProductComponent } from './products/favorite-product/favorite-product.component';
import { ErrorComponent } from './products/error/error.component';
import { DescslicePipe } from './products/descslice.pipe';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    FavoriteProductComponent,
    ErrorComponent,
    DescslicePipe,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
