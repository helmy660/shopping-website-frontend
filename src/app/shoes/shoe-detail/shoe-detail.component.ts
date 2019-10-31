import { Component, OnInit, Input } from '@angular/core';
import { Shoe } from '../shoe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Cart } from 'src/app/shared/cart/cart.model';

@Component({
  selector: 'app-shoe-detail',
  templateUrl: './shoe-detail.component.html',
  styleUrls: ['./shoe-detail.component.css']
})
export class ShoeDetailComponent implements OnInit {

  @Input() item: Shoe;
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
  }

  addToCart(name) {
    const cart = new Cart(name,1);
    this.shoppingService.setCartItems(cart);
  }

}
