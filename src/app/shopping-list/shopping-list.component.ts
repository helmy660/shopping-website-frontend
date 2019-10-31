import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/cart/cart.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {

  cartItems: Cart[];

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.cartItems = this.shoppingService.getCartItems();
  }
}
