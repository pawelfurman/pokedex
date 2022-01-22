import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { addPokemonToWishlist } from '../../store/actions/pokemon-wishlist.actions'
import { selectPokemonPossessionState } from '../../store/reducers/pokemon-possession.reducer'
import { selectPokemonWishlistState } from '../../store/reducers/pokemon-wishlist.reducer'

import { WantToCatchButtonComponent } from './want-to-catch-button.component'

describe('WantToCatchButtonComponent', () => {
  let component: WantToCatchButtonComponent
  let fixture: ComponentFixture<WantToCatchButtonComponent>
  let store: MockStore
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WantToCatchButtonComponent],
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
    })
      .compileComponents()

    store = TestBed.inject(MockStore)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(WantToCatchButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it("should dispatch addPokemonToWishlist action when the add method is invoked", () => {
    component.pokemon.id = "1"
    const dispatchSpy = spyOn(store, 'dispatch')
    component.add()
    expect(dispatchSpy).toHaveBeenCalledWith(addPokemonToWishlist({ payload: component.pokemon }))
  })

  describe('When pokemon input changes', () => {


    it('should set disabled$ to true if pokemon.id is in either the possession or wishlist state', () => {
      component.pokemon.id = '7'
      component.disabled$.subscribe((disabled) => {
        expect(disabled).toBe(true)
      })

      component.pokemon.id = '1'
      component.disabled$.subscribe((disabled) => {
        expect(disabled).toBe(true)
      })
    })

    it('should set disabled$ to false if pokemon.id is out of both the possession and wishlist state', () => {
      component.pokemon.id = '11'
      component.disabled$.subscribe((disabled) => {
        expect(disabled).toBe(false)
      })
    })
  })

})
