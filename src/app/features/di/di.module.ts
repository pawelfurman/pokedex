import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PageDiComponent } from './page-di/page-di.component'
import { ChildComponent } from './components/child/child.component'
import { GrandchildComponent } from './components/grandchild/grandchild.component'
import { CardModule } from 'primeng/card'
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    PageDiComponent,
    ChildComponent,
    GrandchildComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    FormsModule
  ]
})
export class DiModule { }
