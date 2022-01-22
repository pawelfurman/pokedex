import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ButtonModule } from "primeng/button";
import { CardModule } from 'primeng/card';
import { InputTextModule } from "primeng/inputtext";
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { FilterPipeModule } from "../../shared/filter-pipe/filter-pipe.module";
import { ImagePlaceholderModule } from "../../shared/image-placeholder/image-placeholder.module";
import { PokemonComponentsModule } from "./components/pokemon-components.module";
import { PagePokemonDetailComponent } from './page-pokemon-detail/page-pokemon-detail.component';
import { PagePokemonDetailModule } from "./page-pokemon-detail/page-pokemon-detail.module";
import { PagePokemonListModule } from "./page-pokemon-list/page-pokemon-list.module";
import { PokemonCacheEffects } from "./store/effects/pokemon-cache.effects";
import { PokemonListEffects } from "./store/effects/pokemon-list.effects";
import { PokemonPossessionEffects } from "./store/effects/pokemon-possession.effects";
import { PokemonWishlistEffects } from "./store/effects/pokemon-wishlist.effects";
import { PokemonDetailEffects } from "./store/effects/pokomon-detail.effects";
import { pokemonCacheFeature } from "./store/reducers/pokemon-cache.reducer";
import { pokemonDetailFeature } from "./store/reducers/pokemon-detail.reducer";
import { pokemonListFeature } from "./store/reducers/pokemon-list.reducer";
import { pokemonPossessionFeature } from "./store/reducers/pokemon-possession.reducer";
import { pokemonWishlistFeature } from "./store/reducers/pokemon-wishlist.reducer";


@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    StoreModule.forFeature(pokemonListFeature),
    StoreModule.forFeature(pokemonWishlistFeature),
    StoreModule.forFeature(pokemonPossessionFeature),
    StoreModule.forFeature(pokemonDetailFeature),
    StoreModule.forFeature(pokemonCacheFeature),
    EffectsModule.forFeature([PokemonListEffects, PokemonWishlistEffects ,PokemonPossessionEffects, PokemonDetailEffects, PokemonCacheEffects]),
    PagePokemonListModule,
    PokemonComponentsModule,
    PagePokemonDetailModule
  ],
  providers: []
})
export class PokemonModule { }
