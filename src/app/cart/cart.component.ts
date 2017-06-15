import { Component, OnInit, OnDestroy, Input,  EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CartItem } from './cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  total: number = 0;
  @Input() cartTotal: number;
  @Input() cartItems: CartItem[];
  @Output() cartItemDeleted = new EventEmitter<{
    productId: number
  }>();
  @Output() cartItemChanged = new EventEmitter<{
    productId: number
  }>();  

  onCartItemDeleted(productData:{productId: number}) {
    this.cartItemDeleted.emit({
        productId: productData.productId
      });    
  }

  onCartItemChanged(productData:{productId: number}) {
    this.cartItemChanged.emit({
        productId: productData.productId
      });    
  }

  constructor() {
  }
 
  ngOnInit() {
  }

}
