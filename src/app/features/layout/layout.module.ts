import { NgModule } from '@angular/core'
import { LayoutComponentsModule } from "./components/layout-components.module"

@NgModule({
  imports: [
    LayoutComponentsModule
  ],
  exports: [
    LayoutComponentsModule
  ]
})
export class LayoutModule { }
