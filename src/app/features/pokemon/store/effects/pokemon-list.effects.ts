import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { Store } from "@ngrx/store"
import { catchError, map, of, switchMap, withLatestFrom } from "rxjs"
import { PagePokemonListService } from "../../page-pokemon-list/page-pokemon-list.service"
import { fetchPokemonList, fetchPokemonListFailure, fetchPokemonListSuccess, updateSearchParams } from "../actions/pokemon-list.actions"
import { PokemonListSearchParams, selectSearchParams } from "../reducers/pokemon-list.reducer"

@Injectable()
export class PokemonListEffects {

    constructor(
        private actions$: Actions,
        private service: PagePokemonListService,
        private store: Store
    ) { }


    /**
     * Controls the http flow by dispatching either success or failure action
     */
    fetch$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fetchPokemonList),
            withLatestFrom(this.store.select(selectSearchParams)),
            switchMap(([_, searchParams]) => this.service.getPokemons(searchParams).pipe(
                map((result) => fetchPokemonListSuccess(result)),
                catchError(() => of(fetchPokemonListFailure()))
            ))
        )
    })

    /**
     * Maps the update search params action to the fetch action after any searchParams manipulation in order to refresh pokemon list.
     */
    updateSearchParams$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateSearchParams),
            switchMap((params: Partial<PokemonListSearchParams>) => {
                return of(fetchPokemonList())
            })
        )
    })
}