import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDiComponent } from './page-di.component';

describe('PageDiComponent', () => {
  let component: PageDiComponent;
  let fixture: ComponentFixture<PageDiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
