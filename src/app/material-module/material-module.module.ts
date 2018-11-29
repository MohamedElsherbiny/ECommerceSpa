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
  MatToolbarModule,
  MatListModule
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
    MatChipsModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
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
