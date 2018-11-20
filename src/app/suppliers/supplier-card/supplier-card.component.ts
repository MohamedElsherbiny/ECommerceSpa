import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Supplier } from 'src/app/model/supplier.model';

@Component({
  selector: 'app-supplier-card',
  templateUrl: './supplier-card.component.html',
  styleUrls: ['./supplier-card.component.css']
})
export class SupplierCardComponent implements OnInit {
  @Input() supplier: Supplier;
  @Output() supplierId = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onDeleteSupplier() {
    this.supplierId.emit(this.supplier.id);
  }
}
