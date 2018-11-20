import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RestCategoryService } from 'src/app/services/rest-category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  category: Category = new Category();
  constructor(private activeRoute: ActivatedRoute, private restCategory: RestCategoryService, private router: Router) { }

  ngOnInit() {
    const categoryId = +this.activeRoute.snapshot.params.id;
    this.restCategory.getCategory(categoryId).subscribe(x => this.category = x);
  }
  updateCategory() {
    this.restCategory.updateCategory(this.category).subscribe(x => this.router.navigate(['category']));
  }
}
