import { ComponentFixture, TestBed } from '@angular/core/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { selectPokemonDetailState } from '../store/reducers/pokemon-detail.reducer'

import { PagePokemonDetailComponent } from './page-pokemon-detail.component'

describe('PagePokemonDetailComponent', () => {
  let component: PagePokemonDetailComponent
  let fixture: ComponentFixture<PagePokemonDetailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagePokemonDetailComponent],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: selectPokemonDetailState,
              value: {
                id: "2",
                name: "pokemon",
                imageUrlFront: "http://abc.de"
              }
            },
          ],
        }),
      ],
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePokemonDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it("should prepare pokemon property based on detail$ stream", () => {
    expect(component.pokemon.id).toBe('2')
    expect(component.pokemon.name).toBe('pokemon')
    expect(component.pokemon.imageUrl).toBe('http://abc.de')
  })

  it("should prepare detail property based on detail$ stream", () => {
    expect(component.detail.id).toBe('2')
    expect(component.detail.name).toBe('pokemon')
    expect(component.detail.imageUrlFront).toBe('http://abc.de')
  })
})
