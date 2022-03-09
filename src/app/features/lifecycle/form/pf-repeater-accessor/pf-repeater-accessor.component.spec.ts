import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfRepeaterAccessorComponent } from './pf-repeater-accessor.component';

describe('PfRepeaterAccessorComponent', () => {
  let component: PfRepeaterAccessorComponent;
  let fixture: ComponentFixture<PfRepeaterAccessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfRepeaterAccessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfRepeaterAccessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
