import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { RestDatasourceService } from 'src/app/services/rest-product.service';
import { Router } from '@angular/router';
import { RestAdminService } from 'src/app/services/rest-admin.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-prduct-card',
  templateUrl: './prduct-card.component.html',
  styleUrls: ['./prduct-card.component.css']
})
export class PrductCardComponent implements OnInit {
  @Input() product: Product;
  @Output() productId = new EventEmitter<number>();
  isAdmin = false;

  constructor(private restService: RestDatasourceService,
    private cart: CartService, private restAdmin: RestAdminService, private router: Router) { }

  ngOnInit() {
    this.isAdmin = this.restAdmin.isAdmin();
  }
  onDeleteProduct() {
    this.productId.emit(this.product.id);
  }
  addProductToCart(product: Product) {
    this.cart.addLine(product);
  }
}
