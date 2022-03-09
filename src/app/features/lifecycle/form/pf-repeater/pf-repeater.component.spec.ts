import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfRepeaterComponent } from './pf-repeater.component';

describe('PfRepeaterComponent', () => {
  let component: PfRepeaterComponent;
  let fixture: ComponentFixture<PfRepeaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfRepeaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfRepeaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
