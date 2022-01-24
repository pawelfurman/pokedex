import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { Store } from "@ngrx/store"
import { Subscription } from "rxjs"
import { selectPokemonPossessionSize } from "src/app/features/pokemon/store/selectors/pokemon-possession.selectors"
import { selectPokemonWishlistSize } from "src/app/features/pokemon/store/selectors/pokemon-wishlist.selectors"


/**
 * Collects information about wishlist and possessing state, displays size of both of this list,
 * gives possibility to open popup and the check exact, current state of user lists
 * 
 * TODO: split functionality into at two components
 */
@Component({
  selector: 'app-app-menu-addon',
  templateUrl: './app-menu-addon.component.html',
  styleUrls: ['./app-menu-addon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppMenuAddonComponent implements OnInit {
  possessionSizeSub: Subscription = new Subscription()
  wishlistSizeSub: Subscription = new Subscription()

  possessionSize: number = 0;
  wishlistSize: number = 0;
  wishlistVisibility: boolean = false;
  possessionVisibility: boolean = false;


  constructor(private store: Store, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.possessionSizeSub = this.store.select(selectPokemonPossessionSize)
      .subscribe((size) => {
        this.possessionSize = size
        this.cd.detectChanges()
      })
    this.wishlistSizeSub = this.store.select(selectPokemonWishlistSize)
      .subscribe((size) => {
        this.wishlistSize = size
        this.cd.detectChanges()
      })

  }

  get possessionSeverity(): string {
    return this.possessionSize > 0 ? 'success' : 'primary'
  }


  get wishlistSeverity(): string {
    return this.wishlistSize > 0 ? 'success' : 'primary'
  }


  ngOnDestroy(): void {
    this.possessionSizeSub.unsubscribe()
    this.wishlistSizeSub.unsubscribe()
  }


  toggleWishlist(): void {
    this.wishlistVisibility = !this.wishlistVisibility
  }

  closeWishlist(): void {
    this.wishlistVisibility = false
  }

  togglePossession(): void {
    this.possessionVisibility = !this.possessionVisibility
  }

  closePossession(): void {
    this.possessionVisibility = false
  }

}
