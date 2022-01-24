import { createAction, props } from "@ngrx/store"
import { StorePokemonDetailEntry } from "../../pokemon.types"

export const fetchPokemonDetail = createAction(
    '[Pokemon Detail] Fetch',
    props<{ name: string }>()
)

export const fetchPokemonDetailSuccess = createAction(
    '[Pokemon Detail] Fetch Success',
    props<StorePokemonDetailEntry>()
)

export const fetchPokemonDetailFailure = createAction(
    '[Pokemon Detail] Fetch Failure',
)

export const clearPokemonDetail = createAction(
    '[Pokemon Detail] Clear',
)