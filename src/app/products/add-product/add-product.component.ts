import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from '../iproduct';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product?: IProduct;

  productform = new FormGroup({
    id: new FormControl(null, Validators.required),
    title: new FormControl(null, Validators.required),
    image: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
  })


  get title(){
    return this.productform.get('title') as FormControl
  }


  get image(){
    return this.productform.get('image') as FormControl
  }


  get description(){
    return this.productform.get('description') as FormControl
  }

  get price(){
    return this.productform.get('price') as FormControl
  }

  

  constructor(private productServe: ProductserviceService, private route:Router) { }

  ngOnInit(): void {
  }

  id: number = 7;

  addproduct(product: IProduct){
    
    this.productServe.products.push(product);
    this.route.navigate(['/products'])
  }

}
