import { Component, OnInit } from '@angular/core';
import { RestSupplierService } from 'src/app/services/rest-supplier.service';
import { Supplier } from 'src/app/model/supplier.model';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor(private restSupplier: RestSupplierService) { }
  suppliers: Supplier[];
  ngOnInit() {
    this.getSuppliers();
  }

  getSuppliers() {
    this.restSupplier.getSuppliers().subscribe(x => this.suppliers = x);
  }
  getSupplierId(id: number) {
    const supplier = this.suppliers.find(p => p.id === id);
    this.restSupplier.deleteSupplier(id).subscribe(x =>
      this.suppliers.splice(this.suppliers.indexOf(supplier), 1)
    );
  }
}

