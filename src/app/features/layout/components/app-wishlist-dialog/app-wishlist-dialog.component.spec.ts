import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { provideMockStore } from '@ngrx/store/testing'

import { AppWishlistDialogComponent } from './app-wishlist-dialog.component'

describe('AppWishlistDialogComponent', () => {
  let component: AppWishlistDialogComponent
  let fixture: ComponentFixture<AppWishlistDialogComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppWishlistDialogComponent],
      imports: [
        RouterTestingModule
      ],
      providers: [
        provideMockStore({}),
      ],
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWishlistDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })


  it("should navigate to the specific url based on argument if the navigateToPokemon is invoked", () => {
    //@ts-ignore
    const routerSpy = spyOn(component.router, 'navigate').and.returnValue()
    component.navigateToPokemon("pokename")
    expect(routerSpy).toHaveBeenCalledWith(['/', 'pokemon', 'pokename'])
  })

  it("should emit the close event if the navigateToPokemon is invoked", () => {
    const closeSpy = spyOn(component.close, 'emit')
    component.navigateToPokemon("pokename")
    expect(closeSpy).toHaveBeenCalled()
  })
})
