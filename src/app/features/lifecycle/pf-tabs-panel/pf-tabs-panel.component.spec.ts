import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfTabsPanelComponent } from './pf-tabs-panel.component';

describe('PfTabsPanelComponent', () => {
  let component: PfTabsPanelComponent;
  let fixture: ComponentFixture<PfTabsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfTabsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfTabsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
