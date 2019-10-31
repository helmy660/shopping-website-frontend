import { Cart } from '../shared/cart/cart.model';

export class ShoppingListService {
    private cartItems: Cart[] = [
        new Cart('Coat',3),
        new Cart('Blazzer',1)
    ];

    getCartItems() {
        return this.cartItems;
    }

    setCartItems(cart: Cart){
        this.cartItems.push(cart);
    }
}