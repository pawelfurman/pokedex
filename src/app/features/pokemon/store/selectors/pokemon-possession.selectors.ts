import { createSelector } from "@ngrx/store"
import { AppState } from "src/app/app.store"
import { PokemonListState } from "../reducers/pokemon-list.reducer"
import { pokemonPossessionFeatureKey, PokemonPossessionState, selectPokemonPossessionState } from "../reducers/pokemon-possession.reducer"

export const selectPokemonPossessionSize = createSelector(
    selectPokemonPossessionState,
    (possession) => possession.length
)