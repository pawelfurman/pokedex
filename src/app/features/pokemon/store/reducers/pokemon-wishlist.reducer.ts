import { createFeature, createReducer, on } from "@ngrx/store"
import { catchPokemon, releasePokemon } from "../actions/pokemon-possession.actions"
import { addPokemonToWishlist, removePokemonFromWishlist } from "../actions/pokemon-wishlist.actions"

export type PokemonWishlistState = string[]

export const pokemonWishlistFeatureKey = "pokemonWishlist"

const initialState: PokemonWishlistState = []

export const pokemonWishlistFeature = createFeature({
    name: pokemonWishlistFeatureKey,
    reducer: createReducer(
        initialState,
        on(addPokemonToWishlist, (state, {payload}) => state.indexOf(payload.id) === -1 ? [...state, payload.id].sort() : state),
        on(removePokemonFromWishlist, (state, {id}) => state.filter((pokemonId: string) => pokemonId !== id))
    )
})


export const {
   selectPokemonWishlistState
} = pokemonWishlistFeature