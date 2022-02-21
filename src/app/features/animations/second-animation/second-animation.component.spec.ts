import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondAnimationComponent } from './second-animation.component';

describe('SecondAnimationComponent', () => {
  let component: SecondAnimationComponent;
  let fixture: ComponentFixture<SecondAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
