import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'
import { Store } from "@ngrx/store"
import { combineLatestWith, map, Observable } from "rxjs"
import { StorePokemonListItem } from "../../pokemon.types"
import { addPokemonToWishlist } from "../../store/actions/pokemon-wishlist.actions"
import { selectPokemonPossessionState } from "../../store/reducers/pokemon-possession.reducer"
import { selectPokemonWishlistState } from "../../store/reducers/pokemon-wishlist.reducer"


@Component({
  selector: 'app-want-to-catch-button',
  templateUrl: './want-to-catch-button.component.html',
  styleUrls: ['./want-to-catch-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WantToCatchButtonComponent implements OnInit {
  @Input() pokemon: StorePokemonListItem = {} as StorePokemonListItem

  pokemonWhitelist$: Observable<string[]> = this.store.select(selectPokemonWishlistState);
  pokemonPossession$: Observable<string[]> = this.store.select(selectPokemonPossessionState);
  disabled$!: Observable<boolean>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.disabled$ = this.pokemonWhitelist$.pipe(
      combineLatestWith(this.pokemonPossession$),
      map(([wishlistIds, possessionIds]) => [...wishlistIds, ...possessionIds]),
      map((ids) => ids.indexOf(this.pokemon.id) !== -1)
    )
  }

  add() {
    this.store.dispatch(addPokemonToWishlist({ payload: this.pokemon }))
  }



}
