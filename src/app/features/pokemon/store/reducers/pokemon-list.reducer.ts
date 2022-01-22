import { createFeature, createReducer, on } from "@ngrx/store"
import { RequestStatus } from "src/app/app.types"
import { StorePokemonListItem } from "../../pokemon.types"
import { fetchPokemonList, fetchPokemonListFailure, fetchPokemonListSuccess, updateSearchParams } from "../actions/pokemon-list.actions"


export const pokemonListFeatureKey = "pokemonList"

export type PokemonListSearchParams = {
    limit: number,
    offset: number
}

export type PokemonListState = {
    entities: StorePokemonListItem[],
    searchParams: PokemonListSearchParams,
    entitiesCount: number,
    requestStatus: RequestStatus
}

export const initialState: PokemonListState = {
    entities: [],
    searchParams: {
        limit: 25,
        offset: 0
    },
    entitiesCount: 0,
    requestStatus: RequestStatus.IDLE
}


export const pokemonListFeature = createFeature({
    name: pokemonListFeatureKey,
    reducer: createReducer(
        initialState,
        on(fetchPokemonList, (state) => {
            return {...state, entities: [], requestStatus: RequestStatus.PROCESSING};
        }),
        on(fetchPokemonListSuccess, (state, payload) => {
           
            return {...state, entities: [...payload.results], entitiesCount: payload.count, requestStatus: RequestStatus.PROCESSED}
        }),
        on(fetchPokemonListFailure, (state) => {
            return {...state, requestStatus: RequestStatus.ERROR};
        }),
        on(updateSearchParams, (state, payload) => {
            const limit = payload.limit === undefined ? state.searchParams.limit : payload.limit;
            const offset = payload.offset === undefined ? state.searchParams.offset : payload.offset;
            return {
                ...state,
                searchParams: {
                    limit,
                    offset
                }
            }
        })
    )
    
})

export const {
    selectPokemonListState,
    selectEntities,
    selectSearchParams,
    selectEntitiesCount,
    selectRequestStatus
} = pokemonListFeature