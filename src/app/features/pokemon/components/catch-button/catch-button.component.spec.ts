import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { catchPokemon } from '../../store/actions/pokemon-possession.actions'
import { selectPokemonPossessionState } from '../../store/reducers/pokemon-possession.reducer'
import { selectPokemonWishlistState } from '../../store/reducers/pokemon-wishlist.reducer'

import { CatchButtonComponent } from './catch-button.component'

describe('CatchButtonComponent', () => {
  let component: CatchButtonComponent
  let fixture: ComponentFixture<CatchButtonComponent>
  let store: MockStore

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatchButtonComponent],
      providers: [
        provideMockStore({
          selectors: [
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
    fixture = TestBed.createComponent(CatchButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it("should dispatch catchPokemon action when the catch method is invoked", () => {
    component.pokemon.id = "1"
    const dispatchSpy = spyOn(store, 'dispatch')
    component.catch()
    expect(dispatchSpy).toHaveBeenCalledWith(catchPokemon({ payload: component.pokemon }))
  })

  describe('When pokemon input changes', () => {
    it('should set disabled$ to false if pokemon.id is out of the possession state', () => {
      component.pokemon.id = '1'
      component.disabled$.subscribe((disabled) => {
        expect(disabled).toBe(false)
      })
    })

    it('should set disabled$ to true if pokemon.id is in the possession state', () => {
      component.pokemon.id = '7'
      component.disabled$.subscribe((disabled) => {
        expect(disabled).toBe(true)
      })
    })
  })

})
