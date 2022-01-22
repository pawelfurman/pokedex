import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { updateSearchParams } from '../../store/actions/pokemon-list.actions'

import { ListPaginatorComponent } from './list-paginator.component'

describe('ListPaginatorComponent', () => {
  let component: ListPaginatorComponent
  let fixture: ComponentFixture<ListPaginatorComponent>
  let store: MockStore

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPaginatorComponent],
      providers: [
        provideMockStore({}),
      ]

    })
      .compileComponents()

    store = TestBed.inject(MockStore)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPaginatorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it("should dispatch updateSearchParams action if the paginate method is invoked", () => {
    const dispatchSpy = spyOn(store, 'dispatch')

    component.paginate({ rows: 10, first: 20 })
    expect(dispatchSpy).toHaveBeenCalledWith(updateSearchParams({
      limit: 10,
      offset: 20
    }))
  })
})
