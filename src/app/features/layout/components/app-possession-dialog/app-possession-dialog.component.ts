import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Router } from "@angular/router"
import { Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { PokemonCacheItem } from "src/app/features/pokemon/store/reducers/pokemon-cache.reducer"
import { selectFullPossession, selectFullWishlist } from "src/app/features/pokemon/store/selectors/pokemon-cache.selectors"

@Component({
  selector: 'app-app-possession-dialog',
  templateUrl: './app-possession-dialog.component.html',
  styleUrls: ['./app-possession-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppPossessionDialogComponent implements OnInit {

  @Input() visibility: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter<void>()

  fullPossession$: Observable<PokemonCacheItem[]> = this.store.select(selectFullPossession)

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
  }

  closePossession() {
    this.close.emit()
  }

  navigateToPokemon(name: string) {
    this.router.navigate(['/', 'pokemon', name])
    this.close.emit()
  }
}
