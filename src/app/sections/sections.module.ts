import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class SectionsModule {}
