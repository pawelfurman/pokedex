import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageErrorComponent } from "./page-error.component";
import { CardModule } from "primeng/card";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";

@NgModule({
  declarations: [PageErrorComponent],
  exports: [PageErrorComponent],
  imports: [
    CommonModule,
    CardModule,
    RouterModule,
    ButtonModule
  ]
})
export class PageErrorModule { }
