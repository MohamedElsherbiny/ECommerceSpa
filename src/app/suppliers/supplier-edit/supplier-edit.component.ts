import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from 'src/app/model/supplier.model';
import { RestSupplierService } from 'src/app/services/rest-supplier.service';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.css']
})
export class SupplierEditComponent implements OnInit {
  supplier: Supplier = new Supplier();
  constructor(private activeRoute: ActivatedRoute, private restSupplier: RestSupplierService, private router: Router) { }

  ngOnInit() {
    const supplierId = +this.activeRoute.snapshot.params.id;
    this.restSupplier.getSupplier(supplierId).subscribe(x => this.supplier = x);
  }
  updateSupplier() {
    this.restSupplier.updateSupplier(this.supplier).subscribe(x => this.router.navigate(['supplier']));
  }
}
