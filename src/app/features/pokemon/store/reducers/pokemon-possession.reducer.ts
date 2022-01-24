import { createFeature, createReducer, on } from "@ngrx/store"
import { catchPokemon, releasePokemon } from "../actions/pokemon-possession.actions"

export const pokemonPossessionFeatureKey = 'pokemonPossession'

export type PokemonPossessionState = string[]

const initialState: PokemonPossessionState = []

export const pokemonPossessionFeature = createFeature({
    name: pokemonPossessionFeatureKey,
    reducer: createReducer(
        initialState,
        on(catchPokemon, (state, { payload }) => {
            return state.indexOf(payload.id) === -1 ? [...state, payload.id].sort() : state
        }),

        on(releasePokemon, (state, { id }) => {
            return state.filter((pokemonId: string) => pokemonId !== id)
        })
    )
})


export const {
    selectPokemonPossessionState
} = pokemonPossessionFeature