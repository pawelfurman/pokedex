import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthAnimationComponent } from './fifth-animation.component';

describe('FifthAnimationComponent', () => {
  let component: FifthAnimationComponent;
  let fixture: ComponentFixture<FifthAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
