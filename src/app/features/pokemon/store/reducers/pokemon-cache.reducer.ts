import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity"
import { createFeature, createReducer, on } from "@ngrx/store"
import { addPokemonCacheItem, deletePokemonCacheItem } from "../actions/pokemon-cache.actions"

const pokemonCacheFeatureKey = "pokemonCache"

export interface PokemonCacheItem {
    name: string,
    id: string,
    url: string,
    imageUrl: string
}

export interface PokemonCacheState extends EntityState<PokemonCacheItem> { }

export const adapter: EntityAdapter<PokemonCacheItem> = createEntityAdapter<PokemonCacheItem>()

export const initialState: PokemonCacheState = adapter.getInitialState()


export const pokemonCacheFeature = createFeature({
    name: pokemonCacheFeatureKey,
    reducer: createReducer(
        initialState,
        on(addPokemonCacheItem, (state, { item }) => adapter.addOne(item, state)),
        on(deletePokemonCacheItem, (state, { id }) => adapter.removeOne(id, state))
    )
})
export const { selectPokemonCacheState } = pokemonCacheFeature

export const { selectAll } = adapter.getSelectors()


export const selectAllCacheItems = selectAll
