import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Router } from "@angular/router"
import { Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { PokemonCacheItem } from "src/app/features/pokemon/store/reducers/pokemon-cache.reducer"
import { selectFullPossession, selectFullWishlist } from "src/app/features/pokemon/store/selectors/pokemon-cache.selectors"


/**
 * Displays current state of possession list
 * 
 * TODO: Merge it with AppWishlistDialogComponent
 */
@Component({
  selector: 'app-app-possession-dialog',
  templateUrl: './app-possession-dialog.component.html',
  styleUrls: ['./app-possession-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppPossessionDialogComponent implements OnInit {


  /**
   * visibility control, controlled by parent component
   */
  @Input() visibility: boolean = false;

  /**
   * emits event in order to close popup
   */
  @Output() close: EventEmitter<void> = new EventEmitter<void>()

  fullPossession$: Observable<PokemonCacheItem[]> = this.store.select(selectFullPossession)

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
  }

  closePossession(): void {
    this.close.emit()
  }

  navigateToPokemon(name: string): void {
    this.router.navigate(['/', 'pokemon', name])
    this.close.emit()
  }
}
