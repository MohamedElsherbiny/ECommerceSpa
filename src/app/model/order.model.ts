import { Injectable } from '@angular/core';
import { CartService } from '../services/cart.service';
@Injectable({
    providedIn: 'root'
  })
export class Order {
    public id: number;
    public name: string;
    public address: string;
    public city: string;
    public state: string;
    public zip: string;
    public country: string;
    public shipped = false;
    constructor(public cart: CartService) { }
    clear() {
        this.id = null;
        this.name = this.address = this.city = null;
        this.state = this.zip = this.country = null;
        this.shipped = false;
        this.cart.clear();
    }
}
