import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { catchError, map, of, switchMap } from "rxjs"
import { PagePokemonDetailService } from "../../page-pokemon-detail/page-pokemon-detail.service"
import { fetchPokemonDetail, fetchPokemonDetailFailure, fetchPokemonDetailSuccess } from "../actions/pokemon-detail.actions"

@Injectable()
export class PokemonDetailEffects {

    constructor(
        private actions$: Actions,
        private service: PagePokemonDetailService,
    ) { }

    /**
     * Controls the http flow by dispatching either success or failure action
     */
    fetch$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fetchPokemonDetail),
            switchMap((action) => this.service.getPokemonDetails(action.name).pipe(
                map((result) => fetchPokemonDetailSuccess(result)),
                catchError(() => of(fetchPokemonDetailFailure()))
            ))
        )
    })

}