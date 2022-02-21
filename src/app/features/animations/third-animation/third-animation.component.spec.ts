import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdAnimationComponent } from './third-animation.component';

describe('ThirdAnimationComponent', () => {
  let component: ThirdAnimationComponent;
  let fixture: ComponentFixture<ThirdAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
