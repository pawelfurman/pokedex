import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Router } from "@angular/router"
import { Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { PokemonCacheItem } from "src/app/features/pokemon/store/reducers/pokemon-cache.reducer"
import { selectFullWishlist } from "src/app/features/pokemon/store/selectors/pokemon-cache.selectors"

@Component({
  selector: 'app-app-wishlist-dialog',
  templateUrl: './app-wishlist-dialog.component.html',
  styleUrls: ['./app-wishlist-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppWishlistDialogComponent implements OnInit {

  @Input() visibility: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter<void>()

  fullWishlist$: Observable<PokemonCacheItem[]> = this.store.select(selectFullWishlist)

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
  }

  closeWishlist() {
    this.close.emit()
  }

  navigateToPokemon(name: string) {
    this.router.navigate(['/', 'pokemon', name])
    this.close.emit()
  }
}
