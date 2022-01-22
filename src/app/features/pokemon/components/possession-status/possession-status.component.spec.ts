import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { PossessionStatusComponent } from './possession-status.component'
import { selectPokemonPossessionState } from '../../store/reducers/pokemon-possession.reducer'
import { selectPokemonWishlistState } from '../../store/reducers/pokemon-wishlist.reducer'
import { removePokemonFromWishlist } from '../../store/actions/pokemon-wishlist.actions'
import { releasePokemon } from '../../store/actions/pokemon-possession.actions'

describe('PossessionStatusComponent', () => {
  let component: PossessionStatusComponent
  let fixture: ComponentFixture<PossessionStatusComponent>
  let store: MockStore

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PossessionStatusComponent],
      imports: [],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: selectPokemonWishlistState,
              value: ['1', '2', '3', '4', '5'],
            },
            {
              selector: selectPokemonPossessionState,
              value: ['6', '7', '8', '9', '10'],
            },
          ],
        }),
      ],
    }).compileComponents()

    store = TestBed.inject(MockStore)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PossessionStatusComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('When pokemonId input changes', () => {
    it('should set isPossesed$ to false if pokemonId is out of the possession state', () => {
      component.pokemonId = '1'
      component.isPossessed$.subscribe((isPossessed) => {
        expect(isPossessed).toBe(false)
      })
    })

    it('should set isPossesed$ to true if pokemonId is inside the possession state', () => {
      component.pokemonId = '6'
      component.isPossessed$.subscribe((isPossessed) => {
        expect(isPossessed).toBe(true)
      })
    })

    it('should set isOnWishlist$ to true if pokemonId is out of the possession state', () => {
      component.pokemonId = '1'
      component.isOnWishlist$.subscribe((isOnWishlist) => {
        expect(isOnWishlist).toBe(true)
      })
    })

    it('should set isOnWishlist$ to true if pokemonId is inside the possession state', () => {
      component.pokemonId = '6'
      component.isOnWishlist$.subscribe((isOnWishlist) => {
        expect(isOnWishlist).toBe(false)
      })
    })
  })

  it("should emit releasePokemon event when removeFromPossession is invoked", () => {
    component.pokemonId = "1"
    const releasePokemonSpy = spyOn(store, 'dispatch')
    component.removeFromPossession()
    expect(releasePokemonSpy).toHaveBeenCalledWith(releasePokemon({ id: component.pokemonId }))
  })

  it("should emit removeFromWishlist event when removeFromWishlist is invoked", () => {
    component.pokemonId = "1"
    const removeFromWishlistSpy = spyOn(store, 'dispatch')
    component.removeFromWishlist()
    expect(removeFromWishlistSpy).toHaveBeenCalledWith(removePokemonFromWishlist({ id: component.pokemonId }))
  })
})
