import { Component, OnInit } from '@angular/core';
import { RestCategoryService } from 'src/app/services/rest-category.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  category: Category;
  constructor(private restCategory: RestCategoryService, private router: Router) { }

  ngOnInit() {
    this.category = new Category();
  }
  addCategory() {
    this.restCategory.addCategory(this.category).subscribe(x =>
      this.router.navigate(['category'])
    );
    this.category = new Category();
  }

}
