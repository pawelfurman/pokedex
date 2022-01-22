import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { Store } from "@ngrx/store"
import { Subscription } from "rxjs"
import { selectPokemonPossessionSize } from "src/app/features/pokemon/store/selectors/pokemon-possession.selectors"
import { selectPokemonWishlistSize } from "src/app/features/pokemon/store/selectors/pokemon-wishlist.selectors"

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

  get possessionSeverity() {
    return this.possessionSize > 0 ? 'success' : 'primary'
  }


  get wishlistSeverity() {
    return this.wishlistSize > 0 ? 'success' : 'primary'
  }


  ngOnDestroy(): void {
    this.possessionSizeSub.unsubscribe()
    this.wishlistSizeSub.unsubscribe()
  }


  toggleWishlist() {
    this.wishlistVisibility = !this.wishlistVisibility
  }

  closeWishlist() {
    this.wishlistVisibility = false
  }

  togglePossession() {
    this.possessionVisibility = !this.possessionVisibility
  }

  closePossession() {
    this.possessionVisibility = false
  }

}
