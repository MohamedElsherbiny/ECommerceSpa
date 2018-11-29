import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { RestCategoryService } from 'src/app/services/rest-category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categorys: Category[];
  categoryToEdit: Category;
  constructor(private restCategory: RestCategoryService) { }
  add = true;
  ngOnInit() {
    this.getCategorys();
  }

  getCategorys() {
    this.restCategory.getCategorys().subscribe(x => this.categorys = x);
  }
  onDeleteCategory(categoryId: string) {
    this.restCategory.deleteCategory(categoryId).subscribe(z => {
      this.restCategory.getCategorys().subscribe(x => this.categorys = x);
    });
  }
  changeToEdit(category: Category) {
    this.categoryToEdit = category;
    this.add = false;
  }
  changeToAdd() {
    this.add = true;
  }

}
