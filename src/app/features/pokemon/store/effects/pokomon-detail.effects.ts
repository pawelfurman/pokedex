import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { switchMap, map, catchError, of } from "rxjs";
import { PagePokemonDetailService } from "../../page-pokemon-detail/page-pokemon-detail.service";
import { fetchPokemonDetail, fetchPokemonDetailFailure, fetchPokemonDetailSuccess } from "../actions/pokemon-detail.actions";

@Injectable()
export class PokemonDetailEffects{

    constructor(
        private actions$: Actions,
        private service:  PagePokemonDetailService,
    ) {}

    fetch$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fetchPokemonDetail),
            switchMap((action) => this.service.getPokemonDetails(action.name).pipe(
                map(( result ) => fetchPokemonDetailSuccess(result)),
                catchError(() => of(fetchPokemonDetailFailure()))
            ))
        )
    })

}