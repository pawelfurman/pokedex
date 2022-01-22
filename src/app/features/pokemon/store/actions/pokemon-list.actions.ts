import { createAction, props } from "@ngrx/store";
import { StorePokemonListEntry } from "../../pokemon.types";
import { PokemonListSearchParams } from "../reducers/pokemon-list.reducer";

export const fetchPokemonList = createAction(
    '[Pokemon List] Fetch'
)

export const fetchPokemonListSuccess = createAction(
    '[Pokemon List] Fetch Success',
    props<StorePokemonListEntry>()
)

export const fetchPokemonListFailure = createAction(
    '[Pokemon List] Fetch Failure',
)

export const updateSearchParams = createAction(
    '[Pokemon List] Update Search Params',
    props<Partial<PokemonListSearchParams>>()

)