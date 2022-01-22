import { ComponentFixture, TestBed } from '@angular/core/testing'
import { provideMockStore } from '@ngrx/store/testing'

import { PagePokemonListComponent } from './page-pokemon-list.component'

describe('PagePokemonListComponent', () => {
  let component: PagePokemonListComponent
  let fixture: ComponentFixture<PagePokemonListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagePokemonListComponent],
      providers: [
        provideMockStore({}),
      ],
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePokemonListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it("should set the filterValue property if the onFilter method is invoked", () => {
    component.onFilter("ab")
    expect(component.filterValue).toBe("ab")

    component.onFilter("cd")
    expect(component.filterValue).toBe("cd")
  })
})
