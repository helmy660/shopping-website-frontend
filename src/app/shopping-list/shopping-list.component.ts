import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/cart/cart.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  cartItems: Cart[] = [
    new Cart('Coat',3),
    new Cart('Blazzer',1)
  ];
  constructor() { }

  ngOnInit() {
  }

  addToCart(cart: Cart){
    console.log(this.cartItems);
    this.cartItems.push(cart);
    console.log(this.cartItems);
  }

}
