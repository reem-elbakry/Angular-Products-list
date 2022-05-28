import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product?: IProduct;
  products?: IProduct[];
  constructor(private productService: ProductserviceService) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  selectedProduct(e: any){
    this.product = e;
  }

}
