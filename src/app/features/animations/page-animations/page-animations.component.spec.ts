import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAnimationsComponent } from './page-animations.component';

describe('PageAnimationsComponent', () => {
  let component: PageAnimationsComponent;
  let fixture: ComponentFixture<PageAnimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAnimationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
