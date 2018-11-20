import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { RestDatasourceService } from 'src/app/services/rest-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prduct-card',
  templateUrl: './prduct-card.component.html',
  styleUrls: ['./prduct-card.component.css']
})
export class PrductCardComponent implements OnInit {
  @Input() product: Product;
  @Output() productId = new EventEmitter<number>();

  constructor(private restService: RestDatasourceService, private router: Router) { }

  ngOnInit() {
  }
  onDeleteProduct() {
    this.productId.emit(this.product.id);
  }
}
