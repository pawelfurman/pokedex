import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Router } from "@angular/router"
import { Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { PokemonCacheItem } from "src/app/features/pokemon/store/reducers/pokemon-cache.reducer"
import { selectFullWishlist } from "src/app/features/pokemon/store/selectors/pokemon-cache.selectors"

/**
 * Displays current state of wishlist
 * 
 * TODO: Merge it with AppPossessionDialogComponent
 */
@Component({
  selector: 'app-app-wishlist-dialog',
  templateUrl: './app-wishlist-dialog.component.html',
  styleUrls: ['./app-wishlist-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppWishlistDialogComponent implements OnInit {

  /**
   * visibility control, controlled by parent component
   */
  @Input() visibility: boolean = false;

  /** 
   *  emits event in order to close popup
  */
  @Output() close: EventEmitter<void> = new EventEmitter<void>()

  fullWishlist$: Observable<PokemonCacheItem[]> = this.store.select(selectFullWishlist)

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
  }

  closeWishlist(): void {
    this.close.emit()
  }

  navigateToPokemon(name: string): void {
    this.router.navigate(['/', 'pokemon', name])
    this.close.emit()
  }
}
