import { createSelector } from "@ngrx/store";
import { selectSearchParams } from "../reducers/pokemon-list.reducer";


export const selectPokemonSearchParamsLimit = createSelector(
    selectSearchParams,
    (state) => state.limit
)

export const selectPokemonSearchParamsOffset = createSelector(
    selectSearchParams,
    (state) => state.offset
)