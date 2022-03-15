import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStructuralComponent } from './page-structural.component';

describe('PageStructuralComponent', () => {
  let component: PageStructuralComponent;
  let fixture: ComponentFixture<PageStructuralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageStructuralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStructuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
