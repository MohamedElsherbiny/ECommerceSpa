import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestDatasourceService } from 'src/app/services/rest-product.service';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  constructor(private restService: RestDatasourceService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const productId = +this.activeRoute.snapshot.params.id;
    this.restService.getProduct(productId).subscribe(x => {
      this.product = x;
    });
  }

}
