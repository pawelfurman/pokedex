import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipePipe } from './filter-pipe.pipe';



@NgModule({
  declarations: [
    FilterPipePipe
  ],
  exports: [
    FilterPipePipe
  ],
  imports: [
    CommonModule
  ],
  providers: [FilterPipePipe]
})
export class FilterPipeModule { }
