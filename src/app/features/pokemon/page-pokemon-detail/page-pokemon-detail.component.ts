import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { StorePokemonDetailEntry, StorePokemonListItem } from "../pokemon.types"
import { clearPokemonDetail } from "../store/actions/pokemon-detail.actions"
import { selectPokemonDetailState } from "../store/reducers/pokemon-detail.reducer"


/**
 * Displays details view of Pokemon
 * 
 * clears the detail state in ngrx store onDestroy
 * 
 * TODO: Split into smaller, easier to test components
 */
@Component({
  selector: 'app-page-pokemon-detail',
  templateUrl: './page-pokemon-detail.component.html',
  styleUrls: ['./page-pokemon-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagePokemonDetailComponent implements OnInit, OnDestroy {

  details$: Observable<StorePokemonDetailEntry> = this.store.select(selectPokemonDetailState)

  detail: StorePokemonDetailEntry = { id: '0' } as StorePokemonDetailEntry
  pokemon: StorePokemonListItem = {} as StorePokemonListItem

  constructor(private store: Store, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.details$.subscribe((detail) => {
      this.detail = detail
      this.pokemon = {
        id: detail.id,
        name: detail.name,
        url: "",
        imageUrl: detail.imageUrlFront
      }
      this.cd.detectChanges()
    })
  }

  ngOnDestroy(): void {
    this.store.dispatch(clearPokemonDetail())
  }

}
