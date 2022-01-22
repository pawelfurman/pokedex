import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { selectPokemonPossessionSize } from 'src/app/features/pokemon/store/selectors/pokemon-possession.selectors'
import { selectPokemonWishlistSize } from 'src/app/features/pokemon/store/selectors/pokemon-wishlist.selectors'

import { AppMenuAddonComponent } from './app-menu-addon.component'

describe('AppMenuAddonComponent', () => {
  let component: AppMenuAddonComponent
  let fixture: ComponentFixture<AppMenuAddonComponent>
  let store: MockStore

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppMenuAddonComponent],
      providers: [
        provideMockStore({
          selectors: [{
            selector: selectPokemonPossessionSize,
            value: 5
          },
          {
            selector: selectPokemonWishlistSize,
            value: 2
          }]
        }),
      ],
    })
      .compileComponents()


    store = TestBed.inject(MockStore)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMenuAddonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it("should set the possessionSize property based on the selectPokemonPossessionSize selector", () => {
    expect(component.possessionSize).toBe(5)
  })

  it("should set the wishlistSize property based on the selectPokemonWishlistSize selector", () => {
    expect(component.wishlistSize).toBe(2)
  })

  it("should set possessionSeverity based on possessionSize", () => {
    expect(component.possessionSeverity).toBe('success')
    component.possessionSize = 0
    expect(component.possessionSeverity).toBe('primary')
  })

  it("should set wishlistSeverity based on wishlistSize", () => {
    expect(component.wishlistSeverity).toBe('success')
    component.wishlistSize = 0
    expect(component.wishlistSeverity).toBe('primary')
  })
})
