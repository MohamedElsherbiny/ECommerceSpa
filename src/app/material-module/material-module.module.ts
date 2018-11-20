import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatRadioModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatChipsModule,
  MatToolbarModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatToolbarModule
  ]
})
export class MaterialModuleModule { }
