import { HttpClientModule } from "@angular/common/http"
import { PagePokemonListService } from "./page-pokemon-list.service"
import { TestBed } from "@angular/core/testing"

describe('PagePokemonListService', () => {
  let service: PagePokemonListService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [],
    })

    service = TestBed.inject(PagePokemonListService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
