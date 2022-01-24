import { createAction, props } from "@ngrx/store"
import { PokemonCacheItem } from "../reducers/pokemon-cache.reducer"

export const catchPokemon = createAction(
    '[Pokemon Possession] Catch',
    props<{ payload: PokemonCacheItem }>()
)


export const releasePokemon = createAction(
    '[Pokemon Possession] Release',
    props<{ id: string }>()
)