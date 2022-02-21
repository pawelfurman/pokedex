import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAnimationComponent } from './first-animation.component';

describe('FirstAnimationComponent', () => {
  let component: FirstAnimationComponent;
  let fixture: ComponentFixture<FirstAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
