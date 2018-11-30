import { Component, OnInit } from '@angular/core';
import { RestSupplierService } from 'src/app/services/rest-supplier.service';
import { Supplier } from 'src/app/model/supplier.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.css']
})
export class SupplierAddComponent implements OnInit {
  supplier: Supplier;
  constructor(private restSupplier: RestSupplierService, private router: Router) { }

  ngOnInit() {
    this.supplier = new Supplier();
  }
  addSupplier() {
    this.restSupplier.addSupplier(this.supplier).subscribe(x =>
      this.router.navigate(['admin/suppliers'])
    );
    this.supplier = new Supplier();
  }

}
