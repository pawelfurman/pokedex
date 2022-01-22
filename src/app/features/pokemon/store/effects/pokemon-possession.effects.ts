import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { PagePokemonListService } from "../../page-pokemon-list/page-pokemon-list.service";

@Injectable()
export class PokemonPossessionEffects{

    constructor(
        private actions$: Actions,
        private service:  PagePokemonListService,
        private store: Store
    ) {}

}