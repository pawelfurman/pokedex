import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";

import { PaginatorModule } from "primeng/paginator";
import { TagModule } from "primeng/tag";

import { CatchButtonComponent } from "../components/catch-button/catch-button.component";
import { ListFilterComponent } from "../components/list-filter/list-filter.component";
import { ListPaginatorComponent } from "../components/list-paginator/list-paginator.component";
import { PossessionStatusComponent } from "../components/possession-status/possession-status.component";
import { WantToCatchButtonComponent } from "../components/want-to-catch-button/want-to-catch-button.component";


const COMPONENTS  = [
    CatchButtonComponent,
    WantToCatchButtonComponent,
    ListFilterComponent,
    ListPaginatorComponent,
    PossessionStatusComponent,
] 

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    PaginatorModule,
    TagModule,
    ButtonModule,
    InputTextModule
  ],
  providers: []
})
export class PokemonComponentsModule { }
