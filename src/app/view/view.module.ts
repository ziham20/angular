import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule
  ],
  exports : [
    ViewComponent
  ]
})
export class ViewModule { }
