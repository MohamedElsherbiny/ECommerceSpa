import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
 selector: 'app-cart-summary',
 templateUrl: 'cart-summary.component.html'
})
export class CartSummaryComponent {
 constructor(public cart: CartService) { }
}
