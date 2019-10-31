import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Cart } from 'src/app/shared/cart/cart.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput',{static: false}) nameInput: ElementRef;
  @ViewChild('amountInput',{static: false}) amountInput: ElementRef;
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddtoList() {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    const newCart = new Cart(name,amount);
    this.shoppingService.setCartItems(newCart);  
  }
}
