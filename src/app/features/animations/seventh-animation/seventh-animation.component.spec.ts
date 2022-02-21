import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhAnimationComponent } from './seventh-animation.component';

describe('SeventhAnimationComponent', () => {
  let component: SeventhAnimationComponent;
  let fixture: ComponentFixture<SeventhAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeventhAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventhAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
