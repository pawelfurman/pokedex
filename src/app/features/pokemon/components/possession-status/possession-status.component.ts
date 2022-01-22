import { map, Observable, tap } from 'rxjs'
import { releasePokemon } from '../../store/actions/pokemon-possession.actions'
import { removePokemonFromWishlist } from '../../store/actions/pokemon-wishlist.actions'
import { selectPokemonPossessionState } from '../../store/reducers/pokemon-possession.reducer'
import { selectPokemonWishlistState } from '../../store/reducers/pokemon-wishlist.reducer'
import { Store } from '@ngrx/store'
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'

@Component({
  selector: 'app-possession-status',
  templateUrl: './possession-status.component.html',
  styleUrls: ['./possession-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PossessionStatusComponent implements OnInit {
  @Input() pokemonId: string = '';

  wishlist$: Observable<string[]> = this.store.select(
    selectPokemonWishlistState
  );
  possession$: Observable<string[]> = this.store.select(
    selectPokemonPossessionState
  );

  isOnWishlist$!: Observable<boolean>
  isPossessed$!: Observable<boolean>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isOnWishlist$ = this.wishlist$.pipe(
      map((ids) => ids.indexOf(this.pokemonId) !== -1)
    )

    this.isPossessed$ = this.possession$.pipe(
      map((ids) => ids.indexOf(this.pokemonId) !== -1)
    )
  }

  removeFromPossession() {
    this.store.dispatch(releasePokemon({ id: this.pokemonId }))
  }

  removeFromWishlist() {
    this.store.dispatch(removePokemonFromWishlist({ id: this.pokemonId }))
  }
}
