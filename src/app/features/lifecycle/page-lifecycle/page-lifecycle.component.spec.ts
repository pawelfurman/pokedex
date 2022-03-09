import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLifecycleComponent } from './page-lifecycle.component';

describe('PageLifecycleComponent', () => {
  let component: PageLifecycleComponent;
  let fixture: ComponentFixture<PageLifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLifecycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
