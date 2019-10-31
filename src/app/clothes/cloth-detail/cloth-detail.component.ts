import { Component, OnInit, Input } from '@angular/core';
import { Cloth } from '../cloth.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Cart } from 'src/app/shared/cart/cart.model';

@Component({
  selector: 'app-cloth-detail',
  templateUrl: './cloth-detail.component.html',
  styleUrls: ['./cloth-detail.component.css']
})
export class ClothDetailComponent implements OnInit {

  @Input() selectedItem: Cloth;
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
  }

  addToCart(name){
    const cart = new Cart(name,1);
    this.shoppingService.setCartItems(cart);
  }

}
