import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs";
import { catchPokemon } from "../actions/pokemon-possession.actions";
import { removePokemonFromWishlist } from "../actions/pokemon-wishlist.actions";

@Injectable()
export class PokemonWishlistEffects{

    constructor(
        private actions$: Actions
    ) {}

    removeOnPossess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(catchPokemon),
            map( (action) => removePokemonFromWishlist({id: action.payload.id}))
    )})
}