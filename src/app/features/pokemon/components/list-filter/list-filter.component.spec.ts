import { ComponentFixture, TestBed } from '@angular/core/testing'
import { provideMockStore } from '@ngrx/store/testing'

import { ListFilterComponent } from './list-filter.component'

describe('ListFilterComponent', () => {
  let component: ListFilterComponent
  let fixture: ComponentFixture<ListFilterComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListFilterComponent],
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFilterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it("should emit filter output event with formatted payload if onInput is invoked", () => {
    const filterSpy = spyOn(component.filter, 'emit')
    component.onInput({ target: { value: 'a' } })
    expect(filterSpy).toHaveBeenCalledWith('a')
    filterSpy.calls.reset()

    component.onInput({ target: { value: 'ab' } })
    expect(filterSpy).toHaveBeenCalledWith('ab')
    filterSpy.calls.reset()

    component.onInput({ target: { value: 'CD' } })
    expect(filterSpy).toHaveBeenCalledWith('cd')
    filterSpy.calls.reset()

    component.onInput({ target: { value: 'XyZ' } })
    expect(filterSpy).toHaveBeenCalledWith('xyz')
  })
})
