import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { selectGlobalLoading } from '../../store/selectors/layout.selectors'

import { AppLoaderComponent } from './app-loader.component'

describe('AppLoaderComponent', () => {
  let component: AppLoaderComponent
  let fixture: ComponentFixture<AppLoaderComponent>
  let store: MockStore

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppLoaderComponent],
      providers: [
        provideMockStore({
          selectors: [{
            selector: selectGlobalLoading,
            value: true
          }]
        }),
      ],
    })
      .compileComponents()

    store = TestBed.inject(MockStore)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLoaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it("should set the isProcessing$ observable to true on init", () => {
    component.isProcessing$.subscribe((isProcessing) => {
      expect(isProcessing).toBeTrue()
    })
  })


  it("should set the isProcessing$ observable to false if selector returns false", () => {
    store.overrideSelector(selectGlobalLoading, false)

    component.isProcessing$.subscribe((isProcessing) => {
      expect(isProcessing).toBeFalse()
    })
  })
})
