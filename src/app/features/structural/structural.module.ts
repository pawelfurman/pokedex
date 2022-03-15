import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PageStructuralComponent } from './page-structural/page-structural.component'
import { CardModule } from 'primeng/card';
import { ReplaceTextDirective } from './replace-text.directive'



@NgModule({
  declarations: [
    PageStructuralComponent,
    ReplaceTextDirective
  ],
  imports: [
    CommonModule,
    CardModule
  ]
})
export class StructuralModule { }
