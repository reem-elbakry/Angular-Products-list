import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() displayAllProducts: Boolean = false;
  @Input() productData?: IProduct;
  @Output() selectProduct: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor() { }

  ngOnInit(): void {
  }

  getDetails(){
    this.selectProduct.emit(this.productData)
  }

}
