import { createFeature, createReducer, on } from "@ngrx/store"
import { RequestStatus } from "src/app/app.types"
import { StorePokemonDetailEntry } from "../../pokemon.types"
import { fetchPokemonDetail, fetchPokemonDetailSuccess, fetchPokemonDetailFailure, clearPokemonDetail } from "../actions/pokemon-detail.actions"

export const pokemonDetailFeatureKey = "pokemonDetail"

export type PokemonDetailState = StorePokemonDetailEntry & {
    requestStatus: RequestStatus
}

export const initialState: PokemonDetailState = {
    requestStatus: RequestStatus.IDLE
} as PokemonDetailState

export const pokemonDetailFeature = createFeature({
    name: pokemonDetailFeatureKey,
    reducer: createReducer(
        initialState,
        on(fetchPokemonDetail, (state) => {
            return { ...state, requestStatus: RequestStatus.PROCESSING }
        }),
        on(fetchPokemonDetailSuccess, (state, payload) => {
            return { ...state, ...payload, requestStatus: RequestStatus.PROCESSED }
        }),
        on(fetchPokemonDetailFailure, (state) => {
            return { ...state, requestStatus: RequestStatus.ERROR }
        }),
        on(clearPokemonDetail, (state) => {
            return { ...initialState, requestStatus: RequestStatus.IDLE }
        })
    )
})

export const { selectPokemonDetailState, selectRequestStatus } = pokemonDetailFeature