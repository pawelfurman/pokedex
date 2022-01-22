import { CommonModule } from "@angular/common"
import { HttpClientModule } from "@angular/common/http"
import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { ButtonModule } from "primeng/button"
import { TableModule } from "primeng/table"
import { FilterPipeModule } from "src/app/shared/filter-pipe/filter-pipe.module"
import { ImagePlaceholderModule } from "src/app/shared/image-placeholder/image-placeholder.module"
import { PokemonComponentsModule } from "../components/pokemon-components.module"
import { PagePokemonListComponent } from "./page-pokemon-list.component"


@NgModule({
  declarations: [
    PagePokemonListComponent,
  ],
  exports: [
    PagePokemonListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    TableModule,
    FilterPipeModule,
    ImagePlaceholderModule,
    PokemonComponentsModule,
    ButtonModule
  ],
  providers: []
})
export class PagePokemonListModule { }
