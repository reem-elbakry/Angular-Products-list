import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../iproduct';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product?: IProduct;
  productid?: number;
  //to get id 
  constructor(private activeRoute: ActivatedRoute, private productService: ProductserviceService) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe((param)=>{
      this.productid = param['id']

     this.product = this.productService.getProductById(this.productid)
    })
  }


}
