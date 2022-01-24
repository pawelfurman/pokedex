import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'
import { Store } from "@ngrx/store"
import { map, Observable, tap } from "rxjs"
import { StorePokemonListItem } from "../../pokemon.types"
import { catchPokemon } from "../../store/actions/pokemon-possession.actions"
import { selectPokemonPossessionState } from "../../store/reducers/pokemon-possession.reducer"

/**
 * Provides functionality to add pokemon to the possession list by clicking on button and dispatching catchPokemon action
 */
@Component({
  selector: 'app-catch-button',
  templateUrl: './catch-button.component.html',
  styleUrls: ['./catch-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatchButtonComponent implements OnInit {

  /**
   * Gets pokemon, it is neccessary to get StorePokemonListItem instead of only id
   * because pokemon is saved on the cache list (the 'pokemonCache' feature key) as well.
   */
  @Input() pokemon: StorePokemonListItem = {} as StorePokemonListItem;

  pokemonPossession$: Observable<string[]> = this.store.select(selectPokemonPossessionState);
  disabled$!: Observable<boolean>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.disabled$ = this.pokemonPossession$.pipe(
      map((ids) => ids.indexOf(this.pokemon.id) !== -1)
    )
  }


  catch(): void {
    this.store.dispatch(catchPokemon({ payload: this.pokemon }))
  }

}
