import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'
import { Store } from "@ngrx/store"
import { map, Observable, tap } from "rxjs"
import { StorePokemonListItem } from "../../pokemon.types"
import { catchPokemon } from "../../store/actions/pokemon-possession.actions"
import { selectPokemonPossessionState } from "../../store/reducers/pokemon-possession.reducer"

@Component({
  selector: 'app-catch-button',
  templateUrl: './catch-button.component.html',
  styleUrls: ['./catch-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatchButtonComponent implements OnInit {

  @Input() pokemon: StorePokemonListItem = {} as StorePokemonListItem;

  pokemonPossession$: Observable<string[]> = this.store.select(selectPokemonPossessionState);
  disabled$!: Observable<boolean>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.disabled$ = this.pokemonPossession$.pipe(
      map((ids) => ids.indexOf(this.pokemon.id) !== -1)
    )
  }


  catch() {
    this.store.dispatch(catchPokemon({ payload: this.pokemon }))
  }

}
