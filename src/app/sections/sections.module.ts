import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class SectionsModule {}
