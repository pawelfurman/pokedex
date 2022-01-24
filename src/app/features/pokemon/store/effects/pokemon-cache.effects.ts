import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { Store } from "@ngrx/store"
import { EMPTY, of, switchMap, withLatestFrom } from "rxjs"
import { addPokemonCacheItem, deletePokemonCacheItem } from "../actions/pokemon-cache.actions"
import { catchPokemon, releasePokemon } from "../actions/pokemon-possession.actions"
import { addPokemonToWishlist, removePokemonFromWishlist } from "../actions/pokemon-wishlist.actions"
import { selectAllItemsToCache } from "../selectors/pokemon-cache.selectors"

@Injectable()
export class PokemonCacheEffects {

    constructor(
        private actions$: Actions,
        private store: Store
    ) { }

    /**
     * Keeps all pokemon (from both possession list and wishlist) data as it could be neccessary for ui (i.e wishlist, possession list)
     */
    addItem$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(catchPokemon, addPokemonToWishlist),
            switchMap((action) => {
                return of(addPokemonCacheItem({ item: action.payload }))
            })
        )
    })

    /**
     * Removes unnecessary data from pokomenCache
     */
    removeItem$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(releasePokemon, removePokemonFromWishlist),
            withLatestFrom(this.store.select(selectAllItemsToCache)),
            switchMap(([{ id }, needToBeCache]) => {
                if (needToBeCache.indexOf(id) === -1) {
                    return of(deletePokemonCacheItem({ id }))
                }
                return EMPTY
            })
        )
    })
}