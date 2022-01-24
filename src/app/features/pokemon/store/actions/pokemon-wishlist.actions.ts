import { createAction, props } from "@ngrx/store"
import { StorePokemonListItem } from "../../pokemon.types"

export const addPokemonToWishlist = createAction(
    '[Pokemon Wishlist] Add',
    props<{ payload: StorePokemonListItem }>()
)

export const removePokemonFromWishlist = createAction(
    '[Pokemon Wishlist] Remove',
    props<{ id: string }>()
)