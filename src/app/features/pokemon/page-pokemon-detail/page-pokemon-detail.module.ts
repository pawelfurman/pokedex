import { CommonModule } from "@angular/common"
import { HttpClientModule } from "@angular/common/http"
import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { CardModule } from "primeng/card"
import { TableModule } from "primeng/table"
import { TagModule } from "primeng/tag"
import { ImagePlaceholderModule } from "src/app/shared/image-placeholder/image-placeholder.module"
import { PokemonComponentsModule } from "../components/pokemon-components.module"
import { PagePokemonDetailComponent } from "./page-pokemon-detail.component"

@NgModule({
  declarations: [
    PagePokemonDetailComponent,
  ],
  exports: [
    PagePokemonDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    TableModule,
    ImagePlaceholderModule,
    PokemonComponentsModule,
    CardModule,
    TagModule
  ],
  providers: []
})
export class PagePokemonDetailModule { }
