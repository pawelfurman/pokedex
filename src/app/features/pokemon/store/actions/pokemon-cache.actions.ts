import { createAction, props } from "@ngrx/store";
import { PokemonCacheItem } from "../reducers/pokemon-cache.reducer";

export const addPokemonCacheItem = createAction(
    "[Pokemon Cache] Add One",
    props<{item: PokemonCacheItem }>()
)

export const deletePokemonCacheItem = createAction(
    "[Pokemon Cache] Delete One",
    props<{ id: string }>()
)