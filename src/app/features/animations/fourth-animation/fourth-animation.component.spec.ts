import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthAnimationComponent } from './fourth-animation.component';

describe('FourthAnimationComponent', () => {
  let component: FourthAnimationComponent;
  let fixture: ComponentFixture<FourthAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
