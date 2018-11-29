import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { Router } from '@angular/router';
import { RestCategoryService } from 'src/app/services/rest-category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  @Input()category: Category = new Category();
  @Output()switchToAdd: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private restCategory: RestCategoryService, private router: Router) { }

  ngOnInit() {
  }
  switchToAddForm() {
      this.switchToAdd.emit(true);
    }
  updateCategory() {
    this.restCategory.updateCategory(this.category).subscribe(x => this.switchToAdd.emit(true));
  }
}
