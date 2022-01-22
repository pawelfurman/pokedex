import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePlaceholderComponent } from './image-placeholder.component';
import {SkeletonModule} from 'primeng/skeleton';


@NgModule({
  declarations: [
    ImagePlaceholderComponent

  ],
  exports: [
    ImagePlaceholderComponent
  ],
  imports: [
    CommonModule,
    SkeletonModule
  ]
})
export class ImagePlaceholderModule { }
