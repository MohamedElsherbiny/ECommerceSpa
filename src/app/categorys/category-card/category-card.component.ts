import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {
  @Input() category: Category;
  @Output() categoryId = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  onDeleteCategory() {
    this.categoryId.emit(this.category.id);
  }

}
