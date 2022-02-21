import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthAnimationComponent } from './sixth-animation.component';

describe('SixthAnimationComponent', () => {
  let component: SixthAnimationComponent;
  let fixture: ComponentFixture<SixthAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixthAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
