import { createSelector } from "@ngrx/store"
import { pokemonWishlistFeature } from "../reducers/pokemon-wishlist.reducer"

export const selectPokemonWishlistSize = createSelector(
    pokemonWishlistFeature.selectPokemonWishlistState,
    (wishlist) => wishlist.length
)