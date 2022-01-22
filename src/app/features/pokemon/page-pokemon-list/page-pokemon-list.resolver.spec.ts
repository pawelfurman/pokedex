import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { provideMockStore } from '@ngrx/store/testing'

import { PagePokemonListResolver } from './page-pokemon-list.resolver'

describe('PagePokemonListResolver', () => {

  let resolver: PagePokemonListResolver

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        provideMockStore({}),
      ],
    })
    resolver = TestBed.inject(PagePokemonListResolver)
  })

  it('should be created', () => {
    expect(resolver).toBeTruthy()
  })
})
