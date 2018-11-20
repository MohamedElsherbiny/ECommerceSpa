import { Component, OnInit } from '@angular/core';
import { RestCategoryService } from '../services/rest-category.service';
import { Supplier } from '../model/supplier.model';
import { Category } from '../model/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categorys: Category[];

  constructor(private restCategory: RestCategoryService) { }

  ngOnInit() {
    this.getCategorys();
  }

  getCategorys() {
    this.restCategory.getCategorys().subscribe(x => this.categorys = x);
  }
  getCategoryId(id: number) {
    const supplier = this.categorys.find(p => p.id === id);
    this.restCategory.deleteCategory(id).subscribe(x =>
      this.categorys.splice(this.categorys.indexOf(supplier), 1)
    );
  }

}
